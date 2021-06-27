import { Box, Heading, Spacer, Button, VStack, HStack, Grid, Text, Link, Image } from "@chakra-ui/react";
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import useSWR from "swr";
import { useState } from 'react'
import SkeletonCards from "./skeleton";

const HeaderButton = styled(Button)`
position: relative; 
padding: 0.4rem 0.5rem; 
font-weight: normal; 

&:hover {
    color: #3B49DF; 

    &::after {
        width: 100%;
    }
}

&:focus {
    box-shadow: none; 
}

${props => props.isCurrent && css`
    font-weight: 500; 

    &::after {
        transition: width 0.2s ease; 
        position: absolute; 
        bottom: 0; 
        margin: auto; 
        content: ""; 
        height: 3px; 
        width: 70%; 
        border-radius: 4px; 
        background-color: #3B49DF;
    }
`}
`;

const Header = ({ isActive, setIsActive }) => {
    return (
        <Box as="header">
            <HStack spacing=".6rem">
                <Heading fontSize="1.25rem"> Posts </Heading>
                <Spacer />

                {timeperiods.map((item, index) => {
                    if (isActive === item) {
                        return (
                            <HeaderButton
                                key={index}
                                isCurrent={isActive}
                                onClick={() => setIsActive(item)}
                            >
                                {item}
                            </HeaderButton>
                        )
                    }
                    return (
                        <HeaderButton key={index} onClick={() => setIsActive(item)}>
                            {item}
                        </HeaderButton>
                    )
                })}
            </HStack>
        </Box>
    )
}

function Card({
    title,
    username,
    userProfile,
    publishedDate,
    tagList,
    headerImage,
    postLink,
    readingTime,
    reactionCount,
    commentCount
}) {
    return (
        <Box 
        mt="3" 
        as="article" 
        bg="white" 
        borderRadius="md" 
        overflow="hidden" 
        border="1px solid #08090a1a">

            {headerImage ? <Image src={headerImage} alt="" /> : ""}
            <Grid templateColumns="max-content 1fr" gap={2} p={4}>
                <Image src={userProfile} w="8" borderRadius="full" alt="" />

                <Box>
                    <VStack align="flex-start" spacing={0}>
                        <Text color="#4D5760" fontSize="14px" fontWeight="500">
                            {username}
                        </Text>
                        <Text color="#4D5760" fontSize="12px">
                            {publishedDate}
                        </Text>
                    </VStack>
                    <Heading fontSize={headerImage ? "30px" : "24px"} mt="3">

                        <Link href={postLink} _hover={{ color: "#323EBE", textDecoration: "none" }} isExternal> {title} </Link>
                    </Heading>

                    <HStack mt="3" fontSize="14px" color="#64707d">
                        {tagList.map((tag, index) => (
                            <Text as ={Link} key={index}>
                                # {tag}
                            </Text>
                        ))}

                    </HStack>
                    <HStack mt={3}>
                        <Button
                            leftIcon={<Image src="/assets/images/like.svg" alt="" />}
                            ml={-2}
                            bg="transparent"
                            padding="6px 8px"
                            height="auto"
                            fontWeight="normal"
                            fontSize="14px"
                            lineHeight = "1.2"
                            borderRadius = "4px"
                            _hover={{bg: "#F6F6F6"}}

                        >
                            {reactionCount} reactions
                        </Button>
                        <Button
                            leftIcon={<Image src="/assets/images/comment.svg" alt="" />}
                            ml={-2}
                            bg="transparent"
                            padding="6px 8px"
                            height="auto"
                            fontWeight="normal"
                            fontSize="14px"
                            lineHeight = "1.2"
                            borderRadius = "4px"
                            _hover={{bg: "#F6F6F6"}}

                        >
                            {commentCount} comments
                        </Button>
                        <Spacer/>
                        <Text fontSize="12px"> {readingTime} min read </Text>
                        <Button
                            bg="#D2D6DB"
                            padding="8px 12px"
                            height="auto"
                            fontWeight="normal"
                            fontSize="14px"
                            borderRadius = "4px"
                            _hover={{bg: "#b5bdc4"}}

                        >
                         save
                        </Button>
                    </HStack>

                </Box>
            </Grid>
        </Box>
    )
}

const fetcher = (url) => fetch(url).then(result => result.json())

const timeperiods = ["Feed", "Week", "Month", "Year", "Infinity", "Latest"]

function returnFetchUrl(isActive) {
    if(isActive === "Feed") {
        return ""
    }
    return isActive.toLowerCase();
}

const Posts = () => {
    const [isActive, setIsActive ] = useState(timeperiods[0]);
    const {data, error} = useSWR(
        `https://dev.to/stories/feed/${returnFetchUrl(isActive)}?page=1`, fetcher
    );

    if (error) return <Box> Failed to Load </Box>;
    if(!data)
    return (
        <Box mb="8" borderRadius="md">
            <Header isActive={isActive} setIsActive={setIsActive}/>
            <SkeletonCards/>
        </Box>
    );

    return(
        <Box mb="8" borderRadius="md">
            <Header isActive={isActive} setIsActive={setIsActive} />

            {data.map((post, index) => (
                <Card
                    key = {post.id}
                    title = {post.title}
                    username={post.user.name}
                    tagList={post.tag_list}
                    readingTime={post.reading_time}
                    commentCount={post.comments_count}
                    reactionCount={post.public_reactions_count}
                    postLink={`https://dev.to${post.path}`}
                    publishedDate={post.readable_published_date}
                    userProfile={post.user.profile_image_url}
                    headerImage={index === 0 ? post.main_image : ""}
                />
            ))}

        </Box>
    ); 
}

export default Posts
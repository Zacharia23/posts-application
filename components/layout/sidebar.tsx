import { ReactNode } from "react"
import { Box, Button, Flex, Heading, Image, Text, Spacer } from "@chakra-ui/react"

type LinkButtonProps = {
    children: ReactNode
}

const LinkButton = ({ children }: LinkButtonProps) => {
    return (
        <Button
            _hover={{ color: "#323EBE", bg: "#E2E4E6" }}
            bg="transparent"
            width="14rem"
            padding="8px"
            fontWeight="normal"
            justifyContent="flex-start"
        >
            {children}
        </Button>
    )
}

const Links = () => {
    return (
        <Box as="nav">
            <LinkButton>
                <Image alt="" src="/assets/images/sidebar/home.svg" mr="3" />
                Home
            </LinkButton>

            <LinkButton>
                <Image alt="" src="/assets/images/sidebar/reading.svg" mr="3" />
                Reading List
            </LinkButton>

            <LinkButton>
                <Image alt="" src="/assets/images/sidebar/listing.svg" mr="3" />
                Listings
            </LinkButton>

            <LinkButton>
                <Image alt="" src="/assets/images/sidebar/podcast.svg" mr="3" />
                Podcasts
            </LinkButton>

            <LinkButton>
                <Image alt="" src="/assets/images/sidebar/video.svg" mr="3" />
                Video
            </LinkButton>

            <LinkButton>
                <Image alt="" src="/assets/images/sidebar/tag.svg" mr="3" />
                Tags
            </LinkButton>

            <LinkButton>
                <Text fontWeight="normal" color="#4D5760" ml="2.3rem">
                    More ...
                </Text>

            </LinkButton>
        </Box>
    )
}

const TagList = ({ children }) => {
    return (
        <Box>
            {children && children.map((item, index) => <LinkButton key={index}> # {item} </LinkButton>)}
        </Box>
    )
}

const Tags = () => {
    return (
        <Box mt="6">
            <Flex pl="2" py="4">
                <Heading as="h3" fontSize="1rem">
                    My Tags
                </Heading>

                <Spacer />
                <Image alt="" src="/assets/images/settings.svg" />
            </Flex>
            <Box maxH="50vh" overflowY="auto">
                <TagList>
                    {[
                        "nextJS",
                        "react",
                        "javasctipt",
                        "ruby",
                        "ruby on rails",
                        "beginners",
                        "typescript"
                    ]}
                </TagList>

            </Box>
        </Box>
    )
}

const Sidebar = props => {
    return (
        <Box as="aside" {...props}>
            <Links />
            <Tags />
        </Box>
    )
}

export default Sidebar
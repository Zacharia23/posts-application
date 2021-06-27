import { Box, Avatar, Button, HStack, VStack, Image, Input, Spacer, Menu, MenuButton, MenuList, MenuItem, Text, Link, MenuDivider } from '@chakra-ui/react';
import Container from "./container";
import { ReactNode } from "react";

type IconButtonProps = {
    children: ReactNode
}

const IconButton = ({ children }: IconButtonProps) => {
    return (
        <Button
            padding="0.4rem"
            width="auto"
            height="auto"
            borderRadius="100%"
            bg="transparent"
            _hover={{ bg: "F6F6F6" }}
        >
            {children}
        </Button>
    )
}

const Navbar = () => {

    return (
        <Box
            py="2"
            boxShadow="sm"
            position="fixed"
            top="0"
            bg="#FFF"
            width="100%"
            zIndex="1"
        >
            <Container>
                <HStack spacing={4}>
                    <Image alt="" src="/assets/images/logo.svg" />
                    <Input
                        maxW="26rem"
                        placeholder="Search..."
                        borderColor="#B5BDC4"
                        borderRadius="5px"
                        d={{ base: "none", md: "block" }}
                    />

                    <Spacer />

                    <HStack spacing={3}>
                        <Button
                            color="#FFF"
                            borderRadius="4px"
                            bg="#3B49DF"
                            fontWeight="100"
                            _hover={{ bg: "#323EBE" }}
                        >
                            Create a Post
                        </Button>

                        <IconButton>
                            <Image src="/assets/images/notification.svg" alt="" />
                        </IconButton>

                        <IconButton>
                            <Image src="/assets/images/bell.svg" alt="" />
                        </IconButton>

                        <Menu isLazy>
                            <MenuButton as={Button} size="sm" px={0} py={0} rounded="full">
                                <Avatar
                                    size={"sm"}
                                    src={"https://avatars2.githubusercontent.com/u/37842853?v=4"} />
                            </MenuButton>

                            <MenuList
                                zIndex={5}
                                border="1px solid"
                                borderColor="gray.100"
                                boxShadow="0px 0px 0"
                                boxColor="gray.200"
                            >
                                <Link href="https://dev.to/m_ahmad " _hover={{ textDecoration: "none" }} isExternal>
                                    <MenuItem>
                                        <VStack justify="start" alignItems='left'>
                                            <Text fontWeight="200"> Shiobhan </Text>
                                            <Text size="sm" color="gray.500" mt="0 !important">
                                                @_shiobhan
                                            </Text>
                                        </VStack>
                                    </MenuItem>
                                </Link>
                                <MenuDivider/>
                                <MenuItem>
                                    <Text fontWeight="200"> Dashboard </Text>
                                </MenuItem>
                                <MenuItem>
                                    <Text fontWeight="200"> Create Post </Text>
                                </MenuItem>
                                <MenuItem>
                                    <Text fontWeight="200"> Reading List </Text>
                                </MenuItem>
                                <MenuItem>
                                    <Text fontWeight="200"> Settings </Text>
                                </MenuItem>
                                <MenuDivider/>
                                <MenuItem>
                                    <Text fontWeight="200"> Sign Out </Text>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </HStack>

                </HStack>

            </Container>

        </Box>
    )

}

export default Navbar;


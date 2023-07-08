import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Text, useDisclosure, VStack, Box, Avatar } from "@chakra-ui/react"
import { Link, useLocation } from "react-router-dom"
import colors from "../assets/colors";

export default function NavbarDrawer({ children, links, login, user, handelLogout }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const location = useLocation();
    return (
        <>
            <span onClick={onOpen}>
                {children}
            </span>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody mt={5} px={0}>
                        <VStack divider={<Divider />} spacing={4} alignItems={"start"} px={4}>

                            {
                                links.map((link) => {
                                    return <Text color={location === link.link ? colors.primary : 'gray.600'} textAlign={"start"} key={link.id} as={Link} to={link.link} onClick={onClose}>{link.text}</Text>
                                })
                            }
                        </VStack>
                    </DrawerBody>
                    <DrawerFooter justifyContent={"space-between"}>
                        {!login ? (
                            <Box
                                justifyContent="flex-end"
                                gap={2}>
                                <Button
                                    as={Link}
                                    to={"/login"}
                                    bgColor={colors.primary}
                                    color={"white"}
                                    _hover={{ bgColor: colors.primaryLight }}>
                                    Login/Register
                                </Button>
                                <Button
                                    variant={"outline"}
                                    border={"1px"}
                                    borderColor={colors.primary}>
                                    Contact Us
                                </Button>
                            </Box>
                        ) : (
                            <>
                                <Box
                                    display={"flex"}
                                    gap={2}
                                >
                                    <Avatar name={`${user.firstName} ${user.lastName}`} />
                                    <Box>
                                        <Text>{user.firstName} {user.lastName}</Text>
                                        <Text>{user.email}</Text>
                                    </Box>
                                </Box>

                                <Button onClick={handelLogout} size={"sm"} rightIco={<ArrowForwardIcon />}>Logout</Button>
                            </>
                        )}
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
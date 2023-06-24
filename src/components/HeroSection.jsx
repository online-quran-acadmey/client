import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import colors from "../assets/colors";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Kid from "../assets/images/kid.jpg";
import Kid2 from "../assets/images/kid2.jpg";
import Kid3 from "../assets/images/b2ap3_large_make_quran_learning_fun_for_kids.jpg";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
    const navigate = useNavigate();
    return (
        <Box
            position={"relative"}
            h={{ base: "60vh", md: "80vh" }}
            transition="all .3s ease-in-out"
        >
            <Box
                display={"flex"}
                justifyContent="space-around"
                alignItems={{ base: "flex-start", md: "center" }}
                w="100%"
                h={"100%"}
                bgColor={colors.primaryLight}
                color={colors.secondaryLight}
                px={{ base: 5, md: "0" }}
                overflow='hidden'
            >
                <Box w={{ base: "100%", md: "30%" }}>
                    <Heading
                        fontSize={"2xl"}
                        fontWeight="semibold"
                        color={colors.primary}
                        my={3}>
                        Quran Online Teaching Center
                    </Heading>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aut
                        laboriosam laborum repellat! Id ab, commodi perspiciatis quam veniam
                        dignissimos, tempore minima expedita qui sed, aspernatur omnis illum
                        consequuntur enim?
                    </Text>
                    <Button
                        my={3}
                        bgColor={colors.primary}
                        color={"white"}
                        rightIcon={<ArrowForwardIcon />}
                        transition="all 0.2s ease-in-out"
                        _hover={{
                            paddingX: "20px",
                        }}
                        onClick={() => navigate("/login")}
                    >
                        Get Started
                    </Button>
                </Box>
                <Box
                    w={"30%"}
                    display={{ base: "none", md: "block" }}
                    position="relative"
                    h={"400px"}>
                    <Box position="absolute" top="0" left="0" w="100%" h="100%">
                        <Image
                            src={Kid}
                            alt="home"
                            objectFit="cover"
                            w={"200px"}
                            h={"200px"}
                            borderRadius="20px 30px 0 0"
                        />
                    </Box>
                    <Box position="absolute" top="10%" left="60%" w="100%" h="100%">
                        <Image
                            src={Kid2}
                            alt="home"
                            objectFit="cover"
                            w={"200px"}
                            h={"200px"}
                            borderRadius="10%"
                        />
                    </Box>
                    <Box position="absolute" top="50%" left="20%" w="100%" h="100%">
                        <Image
                            src={Kid3}
                            alt="home"
                            objectFit="cover"
                            w={"200px"}
                            h={"200px"}
                            borderRadius="50%"
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

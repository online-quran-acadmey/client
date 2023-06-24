import { Box, Center, Heading, Image, Text, VStack } from "@chakra-ui/react";
import kid from '../../assets/images/b2ap3_large_make_quran_learning_fun_for_kids.jpg'

const AboutUs = () => {
    return (
        <Box maxW="800px" mx="auto" mt="40px" p="20px">
            <Center>
                <Image src={kid} alt="Online Quran Academy" maxW="200px" />
            </Center>
            <VStack my="40px" spacing="20px" align="stretch">
                <Heading as="h2" size="xl" textAlign="center">
                    About Us
                </Heading>
                <Text lineHeight="1.5">
                    Welcome to Online Quran Academy, the leading online Quran learning platform. Our mission is to help students around the world learn and understand the Quran in a convenient and efficient way.
                </Text>
                <Text lineHeight="1.5">
                    Our team of experienced Quran teachers are dedicated to providing the highest quality online Quran classes to students of all ages and backgrounds. We offer a range of courses, including Quran reading, Tajweed, Quran memorization, and Quran translation.
                </Text>
                <Text lineHeight="1.5">
                    At Online Quran Academy, we believe that learning the Quran should be accessible to everyone, regardless of their location or schedule. That's why we offer flexible class timings and personalized lesson plans to meet the unique needs of each student.
                </Text>
                <Text lineHeight="1.5">
                    Join our community of learners and start your journey towards understanding the Quran today!
                </Text>
            </VStack>
        </Box>
    );
};

export default AboutUs;

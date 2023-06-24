import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import colors from "../assets/colors";

function CoursesSection() {
    const courses = [
        {
            title: "Basic Quran Reading",
            image: "https://www.shutterstock.com/image-photo/two-little-boys-mosque-read-260nw-357530825.jpg",
            description: "Learn to read Quran with proper pronunciation and basic tajweed rules.",
        },
        {
            title: "Quran Memorization",
            image: "https://st2.depositphotos.com/2694891/11998/i/600/depositphotos_119984030-stock-photo-asian-muslim-child-with-smile.jpg",
            description: "Memorize the Quran with the help of our experienced Quran tutors.",
        },
        {
            title: "Quran Translation",
            image: "https://media.istockphoto.com/id/149054086/photo/muslim-kids-reading-koran.jpg?s=612x612&w=0&k=20&c=YcF_zcVSvzbjMx61JQZH5cF05tw0s7L45yY9JzDSr2A=",
            description: "Understand the meaning of Quranic verses with our Quran translation course.",
        },
    ];

    return (
        <Box bg="gray.50" px={4} py={16}>
            <Heading as="h2" size="xl" mb={8} textAlign="center">
                Our Courses
            </Heading>
            <Flex direction={{ base: "column", lg: "row" }} maxW={{ xl: "1200px" }} mx="auto" justify="space-between">
                {courses.map((course) => (
                    <Box color={colors.secondaryLight} borderRadius={8} bg={colors.primaryLight} key={course.title} flex={1} mb={{ base: 8, lg: 0 }} mr={{ lg: 8 }}>
                        <Image src={course.image} w="100%" alt={course.title} objectFit="cover" borderRadius="md" boxShadow="md" mb={4} />
                        <Box p={4}>
                            <Heading as="h3" size="lg" mb={2}>
                                {course.title}
                            </Heading>
                            <Text>{course.description}</Text>
                        </Box>
                    </Box>
                ))}
            </Flex>
        </Box>
    );
}

export default CoursesSection;

import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import colors from "../assets/colors";

function WhyChooseUsSection() {
    return (
        <Box bg="white" px={4} py={16}>
            <Heading as="h2" size="xl" mb={8} textAlign="center">
                Why Choose Us?
            </Heading>
            <Stack direction={{ base: "column", lg: "row" }} spacing={8} maxW={{ xl: "1200px" }} mx="auto">
                <Box bg={colors.primary} color={colors.secondaryLight} p={8} borderRadius={8} flex={1}>
                    <Heading as="h3" size="lg" mb={2}>
                        Certified Teachers
                    </Heading>
                    <Text>
                        Our Quran tutors are certified and have years of experience teaching Quran online to students of all ages.
                    </Text>
                </Box>
                <Box flex={1} bg={colors.primary} color={colors.secondaryLight} p={8} borderRadius={8}>
                    <Heading as="h3" size="lg" mb={2}>
                        One-on-One Classes
                    </Heading>
                    <Text>
                        We offer one-on-one Quran classes that are tailored to your specific needs and learning style.
                    </Text>
                </Box>
                <Box flex={1} bg={colors.primary} color={colors.secondaryLight} p={8} borderRadius={8}>
                    <Heading as="h3" size="lg" mb={2}>
                        Flexible Schedule
                    </Heading>
                    <Text>
                        Our Quran classes are available 24/7, so you can choose a time that is convenient for you to learn Quran online.
                    </Text>
                </Box>
            </Stack>
        </Box>
    );
}

export default WhyChooseUsSection;

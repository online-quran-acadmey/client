import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { color } from "framer-motion";
import colors from "../assets/colors";

function TestimonialsSection() {
    const testimonials = [
        {
            name: "Sarah Ahmed",
            image: "https://userphotos2.teacheron.com/1583102-13075.jpg",
            review: "I've been teaching Quran online for over 5 years and I can confidently say that Learn Quran Online is one of the best online Quran academies out there.",
        },
        {
            name: "Ahmed Khan",
            image: "https://bit.ly/3zqYaej",
            review: "I enrolled my son in Learn Quran Online and I'm so happy with the progress he's made. The tutors are patient and knowledgeable and the one-on-one classes are really effective.",
        },
        {
            name: "Aisha Malik",
            image: "https://bit.ly/3A5dHuN",
            review: "I wanted to learn Quran online but I was hesitant at first. Learn Quran Online made the process so easy and their tutors are amazing. I highly recommend their services.",
        }, {
            name: "Aisha Malik",
            image: "https://bit.ly/3A5dHuN",
            review: "I wanted to learn Quran online but I was hesitant at first. Learn Quran Online made the process so easy and their tutors are amazing. I highly recommend their services.",
        }, {
            name: "Aisha Malik",
            image: "https://bit.ly/3A5dHuN",
            review: "I wanted to learn Quran online but I was hesitant at first. Learn Quran Online made the process so easy and their tutors are amazing. I highly recommend their services.",
        }, {
            name: "Aisha Malik",
            image: "https://bit.ly/3A5dHuN",
            review: "I wanted to learn Quran online but I was hesitant at first. Learn Quran Online made the process so easy and their tutors are amazing. I highly recommend their services.",
        },
    ];

    return (
        <Box bg="white" px={4} py={16}
        >
            <Heading as="h2" size="xl" mb={8} textAlign="center">
                Testimonials
            </Heading>
            <Box display={'inline-list-item'} p={4} gap={8} w="100%"
                overflowX={'scroll'}
                sx={{
                    '&::-webkit-scrollbar': {
                        width: '2px',
                        height: '5px'

                    },
                    '&::-webkit-scrollbar-track': {
                        background: 'transparent'

                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: colors.secondary,
                        borderRadius: '1rem',
                    }
                }}
            >
                {testimonials.map((testimonial) => (
                    <Flex w={'40%'} bg={colors.primary} color={colors.secondaryLight} p={8} borderRadius={8} key={testimonial.name} justify="space-between" alignItems="center">
                        <Image src={testimonial.image} alt={testimonial.name} objectFit="cover" borderRadius="full" boxSize={{ base: "80px", lg: "100px" }} mr={{ lg: 8 }} />
                        <Box>
                            <Text color={colors.secondary} fontSize="2xl" mb={2}>
                                {testimonial.name}
                            </Text>
                            <Text>"{testimonial.review}"</Text>
                        </Box>
                    </Flex>
                ))}
            </Box>
        </Box>
    );
}

export default TestimonialsSection;

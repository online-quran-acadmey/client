import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import kid from '../../assets/images/b2ap3_large_make_quran_learning_fun_for_kids.jpg'

export default function TutorCoursesCard({ course }) {
    const { id, name, description, rating, tutor, price, discount, enrolledStudents } = course;
    return (
        <Box borderWidth="1px" borderRadius="md" borderColor="gray.200" overflow="hidden">
            <Image src={kid} alt={name} objectFit="cover" boxSize="280px" />
            <Box p={4}>
                <Heading as="h3" size="lg" mb={2}>
                    {name}
                </Heading>
                <Text mb={4}>{description.slice(0, 50)}</Text>
                <Flex alignItems="center" mb={4}>
                    <Text fontSize="sm" mr={2}>
                        {rating}
                    </Text>
                    <Box as="span" color="orange.500">
                        ★★★★★
                    </Box>
                </Flex>
                <Stack direction={{ base: "column", md: "column" }} spacing={4} mb={4}>
                    <Stack direction="row" spacing={2}>
                        <Text fontSize="xl" fontWeight="bold" mb={2}>
                            ${price}
                        </Text>
                        <Text fontSize="sm" textDecoration="line-through" color="gray.500">
                            ${discount}
                        </Text>
                        {/* <Box
                            bg="green.100"
                            color="green.800"
                            borderRadius="md"
                            fontSize="sm"
                            fontWeight="semibold"
                            mt={2}
                        >
                            {discount}% off
                        </Box> */}
                    </Stack>
                </Stack>
                {/* <Flex alignItems="center">
                    <Avatar name={`${tutor.firstName} ${tutor.lastName}`} />
                    <Box>
                        <Text fontSize="sm" fontWeight="bold">
                            {tutor.firstName}
                        </Text>
                        <Text fontSize="sm">{tutor.firstName}</Text>
                    </Box>
                    <Box ml="auto">
                        {enrolledStudents > 0 && (
                            <Flex alignItems="center">
                                <Text fontSize="sm" mr={2}>
                                    {enrolledStudents} already enrolled
                                </Text>
                                <Stack direction="row" spacing={-2}>
                                    {Array.from({ length: enrolledStudents }, (_, i) => (
                                        <Box key={i} as="img" src="https://bit.ly/3kQBhjz" alt="User Avatar" boxSize="24px" borderRadius="full" border="2px" borderColor="white" />
                                    ))}
                                </Stack>
                            </Flex>
                        )}
                    </Box>
                </Flex> */}
            </Box >
        </Box >
    )
}

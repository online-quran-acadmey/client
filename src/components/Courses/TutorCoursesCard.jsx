import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, IconButton, Image, Stack, Text, Toast, useToast } from '@chakra-ui/react'
import React from 'react'
import kid from '../../assets/images/b2ap3_large_make_quran_learning_fun_for_kids.jpg'
import { useDeleteCourseMutation } from '../../services/course.service';
import UpdateCourseModal from '../Modal/UpdateCourseModal';

export default function TutorCoursesCard({ course }) {
    const { id, name, description, rating, tutor, price, discount, enrolledStudents } = course;

    const toast = useToast();
    const [deleteCourse] = useDeleteCourseMutation()
    const handleDelete = (id) => {
        deleteCourse(id).then((res) => {
            if (res.data) {
                toast({
                    title: 'Success',
                    description: res.data.message,
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: 'top',
                    variant: 'left-accent'
                })
            }
            if (res.error) {
                toast({
                    title: 'Error',
                    description: res.error.data.message,
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                    position: 'top',
                    variant: 'left-accent'
                })
            }
        })
    }

    const handleEdit = (id) => {
        console.log(id)
    }

    return (
        <Box borderWidth="1px" borderRadius="md" borderColor="gray.200" overflow="hidden">
            <Image src={kid} alt={name} objectFit="cover" boxSize={{ base: "350px", md: "280px" }} />
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
                    </Stack>

                    <Flex justifyContent='flex-end'>
                        <IconButton aria-label='Delete' onClick={() => handleDelete(id)} icon={<DeleteIcon />} colorScheme='red' variant='ghost' />
                        <UpdateCourseModal course={course}>
                            <IconButton aria-label='Edit' icon={<EditIcon />} colorScheme='blue' variant='ghost' /></UpdateCourseModal>
                    </Flex>
                </Stack>
            </Box >
        </Box >
    )
}

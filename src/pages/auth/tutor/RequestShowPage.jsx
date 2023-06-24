import { Box, Button, Center, Flex, Heading, Image, Spinner, Text, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useGetAllCourseByTutorQuery } from "../../../services/course.service";
// import { useGetAllCourseByTutorQuery } from "../services/course.service"


export default function RequestShowPage() {

    const [courses, setCourses] = useState([])

    const toast = useToast();

    const { data, isSuccess, isLoading, error, isError } = useGetAllCourseByTutorQuery();

    useEffect(() => {
        if (isSuccess) {
            data.courses.map(course => {
                if (course.requestedStudent.length > 0) {
                    setCourses(prev => [...prev, course])
                }
            })
        }
        if (isError) {
            toast({
                title: "Error",
                description: error.data.message,
                status: "error",
                duration: 9000,
                isClosable: true,
                variant: "left-accent",
                position: "top",
            });
        }
    }, [data, error])

    const course = {
        name: "Quran Memorization",
        instructor: "Sheikh Ahmed",
        duration: "10 weeks",
        price: "$100",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    };

    if (isLoading) {
        return <Center><Spinner /></Center>
    }

    return (
        <>{courses.length <= 0 ? (
            <Center>
                <Text color="gray.500">No new notifications</Text>
            </Center>
        ) : (
            <Box borderWidth="1px" borderRadius="lg" maxW="1200px" mx="auto" mt="40px" p="20px">
                <Flex mb="40px" justify="space-between">
                    <Heading as="h2" size="xl">Request to Join Course</Heading>
                </Flex>
                <Flex mb="40px" gap={4} alignItems="center">
                    <Box>
                        <Image boxSize={"150px"} src={course.image} alt={course.name} borderRadius="lg" />
                    </Box>
                    <Box pl="40px">
                        <Heading as="h3" size="md" mb="10px">{course.name}</Heading>
                        <Text mb="10px" color="gray.500">Instructor: {course.instructor}</Text>
                        <Text mb="10px" color="gray.500">Duration: {course.duration}</Text>
                        <Text mb="10px" color="gray.500">Price: {course.price}</Text>
                    </Box>
                </Flex>
                <Box p="20px">
                    <Text mb="10px">Student Request:</Text>
                    <Text fontWeight="bold">John Doe</Text>
                    <Text mt="10px" color="gray.500">john.doe@example.com</Text>
                    <Flex mt="20px" justify="flex-end">
                        <Button mr="10px">Cancel</Button>
                        <Button colorScheme="blue">Accept</Button>
                    </Flex>
                </Box>
            </Box>
        )

        }
        </>
    )
}


import { CheckIcon, CloseIcon, DeleteIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Flex, Heading, IconButton, Image, Spinner, Text, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAcceptRequestMutation, useGetAllCourseByTutorQuery } from "../../../services/course.service";



export default function RequestShowPage() {

    const [courses, setCourses] = useState([]);

    const toast = useToast();

    const { data, isSuccess, isLoading, error, isError } = useGetAllCourseByTutorQuery();

    const [acceptRequest] = useAcceptRequestMutation();

    useEffect(() => {
        if (isSuccess) {
            setCourses([])
            data.courses.map(course => {
                if (course.requestedStudent.length > 0) {
                    setCourses(prev => [...prev, course]);
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


    if (isLoading) {
        return <Center><Spinner /></Center>
    }

    const handleAccept = (courseId, userId) => {
        acceptRequest({ courseId, userId }).then(res => {
            if (res.data) {
                toast({
                    title: "Success",
                    description: res.data.message,
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                    variant: "left-accent",
                    position: "top",
                })
            }
            if (res.error) {
                toast({
                    title: "Error",
                    description: res.error.data.message,
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                    variant: "left-accent",
                    position: "top",
                })
            }
        }).catch(err => {
            toast({
                title: "Error",
                description: err.message,
                status: "error",
                duration: 9000,
                isClosable: true,
                variant: "left-accent",
                position: "top",
            })
        })
    }

    const handleReject = (id) => {
        console.log(id)
    }

    return (
        <>{courses.length <= 0 ? (
            <Center>
                <Text color="gray.500">No new Request</Text>
            </Center>
        ) : (
            courses.map(course => {
                return <Box key={course.id} borderWidth="1px" borderRadius="lg" maxW="1200px" mx="auto" mt="40px" p="20px">
                    <Flex mb="40px" justify="space-between">
                        <Heading as="h2" size="xl">Requests to Join Course</Heading>
                    </Flex>
                    <Flex justify={"space-between"}>
                        <Flex mb="40px" gap={4} alignItems="center">
                            <Box>
                                <Image boxSize={"150px"} src={'https://images.unsplash.com/photo-1519681393784-d120267933ba'} alt={course.name} borderRadius="lg" />
                            </Box>
                            <Box pl="40px">
                                <Heading as="h3" size="md" mb="10px">{course.name}</Heading>
                                <Text mb="10px" color="gray.500">Instructor: {course.tutor?.firstName}</Text>
                                <Text mb="10px" color="gray.500">Duration: 3 Weeks</Text>
                                <Text mb="10px" color="gray.500">Price: {course.price}</Text>
                            </Box>
                        </Flex>
                        <Box>
                            <Text mb="10px">Student Request:</Text>
                            {
                                course.requestedStudent.map(student => {
                                    return <Flex mt="10px" key={student.id} alignItems='center' gap={2}>
                                        <Text fontWeight="bold">{student.firstName} {student.lastName}</Text>
                                        <Text color="gray.500">{student.email}</Text>
                                        <IconButton onClick={() => handleAccept(course.id, student.id)} icon={<CheckIcon />} colorScheme='green' aria-label='Accept' />
                                        <IconButton onClick={() => handleReject(student.id)} icon={<CloseIcon />} colorScheme='red' aria-label='Close' />
                                    </Flex>
                                })
                            }

                        </Box>
                    </Flex>
                </Box>
            })

        )

        }
        </>
    )
}


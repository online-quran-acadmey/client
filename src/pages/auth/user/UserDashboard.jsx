import { Box, Center, Flex, Grid, Heading, IconButton, SimpleGrid, Stat, StatHelpText, StatLabel, StatNumber, Text } from "@chakra-ui/react";
import { CalendarIcon, ChevronDownIcon, CheckIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { useGetAllCourseQuery, useTotalStudentRecordQuery } from "../../../services/course.service";

const StudentDashboard = () => {
    const [courses, setCourses] = useState([]);
    const [joinedCourses, setJoinedCourses] = useState(0);
    const [requestedCourses, setRequestedCourses] = useState(0)
    const { data, isSuccess } = useTotalStudentRecordQuery();
    const { data: courseData, isSuccess: isSuccessCourse } = useGetAllCourseQuery();
    useEffect(() => {
        if (isSuccess) {
            setJoinedCourses(data.joinedCourses);
            setRequestedCourses(data.requestedCourses);
        }
        if (isSuccessCourse) {
            setCourses(courseData.data);
        }
    }, [data, isSuccess, isSuccessCourse, courseData]);
    return (
        <Box maxW="1200px" mx="auto" mt="40px" p="20px">
            <Flex mb="40px" justify="space-between">
                <Heading as="h2" size="xl">Dashboard</Heading>
                <IconButton icon={<ChevronDownIcon />} aria-label="Show more options" size="lg" />
            </Flex>
            <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="20px">
                <Box>
                    <Heading as="h3" size="md" mb="10px">My Courses</Heading>
                    <Flex alignItems="center" mb="10px">
                        <CalendarIcon mr="10px" />
                        <Text mr="10px">Next course starts on:</Text>
                        <Text fontWeight="bold">July 15, 2022</Text>
                    </Flex>
                    <SimpleGrid columns={2} spacing="20px">
                        <Stat>
                            <StatLabel>Total Courses</StatLabel>
                            <StatNumber>{joinedCourses}</StatNumber>
                            <StatHelpText>1 new course this month</StatHelpText>
                        </Stat>
                        <Stat>
                            <StatLabel>Requested Courses</StatLabel>
                            <StatNumber>{requestedCourses}</StatNumber>
                        </Stat>
                    </SimpleGrid>
                </Box>
                <Box>
                    <Heading as="h3" size="md" mb="10px">Notifications</Heading>
                    <Center borderWidth="1px" borderRadius="lg" p="20px" h="200px">
                        <Text color="gray.500">No new notifications</Text>
                    </Center>
                </Box>
            </SimpleGrid>
            <Box mt="40px">
                <Heading as="h3" size="md" mb="10px">My Progress</Heading>
                <SimpleGrid columns={{ sm: 2, md: 1 }} spacing="20px">
                    <Box borderWidth="1px" borderRadius="lg" p="20px">
                        <Text mb="10px">Current Course:</Text>
                        <Text fontWeight="bold">Quran Memorization</Text>
                        <Text mt="10px" color="gray.500">Lesson 3 of 10</Text>
                    </Box>
                    <Box borderWidth="1px" borderRadius="lg" p="20px">
                        <Text mb="10px">Recent Activity:</Text>
                        <Text fontWeight="bold">Completed Quran Reading</Text>
                        <Flex mt="10px" alignItems="center">
                            <Text mr="5px" color="gray.500">July 5, 2022</Text>
                            <CheckIcon />
                        </Flex>
                    </Box>
                </SimpleGrid>
            </Box>
            <Box mt="40px">
                <Heading as="h3" size="md" mb="10px">Recommended Courses</Heading>
                <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }} gap={6}>
                    {
                        courses.map((course) => {
                            return (
                                <Box key={course.id} borderWidth="1px" borderRadius="lg" p="20px">
                                    <Text mb="10px">Course:</Text>
                                    <Text fontWeight="bold">{course.name}</Text>
                                    <Text mt="10px" color="gray.500">Lesson 1 of 3</Text>
                                </Box>
                            )
                        })
                    }
                </Grid>
            </Box>
        </Box>

    );
}


export default StudentDashboard;
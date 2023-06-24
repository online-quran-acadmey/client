import { RepeatIcon } from "@chakra-ui/icons";
import { Box, Divider, Heading, IconButton, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AllCourses from "../../../components/Courses/AllCourses";
import EnrolledCourseCard from "../../../components/Courses/EnrolledCourseCard";
import { useGetAllEnrolledCourseQuery } from "../../../services/course.service";

export default function Enrollments() {

  const toast = useToast();

  const [courses, setCourses] = useState([]);

  const { data, isSuccess, isLoading, error, isError } = useGetAllEnrolledCourseQuery();

  useEffect(() => {
    if (isSuccess) {
      console.log(data.courses);
      setCourses(data.courses);
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

  return <Box
    overflowX="hidden"
    w="100%"
    h={"70vh"}
    display={"flex"}
    justifyContent={"center"}
    mt={"24"}
    gap={6}
  >
    <Box w={"60%"}>
      <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mb={3}>
        <Heading textAlign={"center"} mb={3}>
          Enrollment List
        </Heading>
        <IconButton icon={<RepeatIcon />} colorScheme={"blue"} variant={"outline"} mb={3} />
      </Box>
      <Divider my={3} />
      <Box display={"grid"} gridTemplateColumns={"repeat(3, 1fr)"} gap={4}>
        {courses?.map((course) => (
          <EnrolledCourseCard key={course.id} course={course} />
        ))}
      </Box>
    </Box>
  </Box>
}

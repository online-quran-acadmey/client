import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import CourseCard from "./CourseCard";
import CourseCard2 from "./CourseCard2";

export default function AllCourses({ courses }) {
  useEffect(() => { }, [courses]);
  return (
    <Box display={"grid"} gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} gap={4}>
      {courses?.map((course) => (
        <CourseCard2 key={course?.id} course={course} />
      ))}
    </Box>
  );
}

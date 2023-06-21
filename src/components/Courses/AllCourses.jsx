import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import CourseCard from "./CourseCard";

export default function AllCourses({ courses }) {
  useEffect(() => {}, [courses]);
  return (
    <Box display={"grid"} gridTemplateColumns={"repeat(3, 1fr)"} gap={4}>
      {courses?.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </Box>
  );
}

import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../../components/Navbar";
import MyCourses from "../../pages/auth/tutor/MyCourses";
import Enrollments from "../../pages/auth/user/Enrollments";
import Courses from "../../pages/public/Courses";
import Home from "../../pages/public/Home";

export default function TutorRoutes() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/my-courses" element={<MyCourses />} />
      </Routes>
    </Box>
  );
}

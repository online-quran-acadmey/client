import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Enrollments from "../../pages/auth/user/Enrollments";
import Courses from "../../pages/public/Courses";
import Home from "../../pages/public/Home";

export default function UserRoutes() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/enrollments" element={<Enrollments />} />
      </Routes>
    </Box>
  );
}

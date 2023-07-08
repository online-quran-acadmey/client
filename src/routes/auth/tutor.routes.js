import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import MyCourses from "../../pages/auth/tutor/MyCourses";
import RequestShowPage from "../../pages/auth/tutor/RequestShowPage";
import TutorDashboard from "../../pages/auth/tutor/TutorDashboard";
import Courses from "../../pages/public/Courses";

export default function TutorRoutes() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<TutorDashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/my-courses" element={<MyCourses />} />

        <Route path="/request" element={<RequestShowPage />} />
      </Routes>
      <Footer />
    </Box>
  );
}

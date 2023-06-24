import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import AboutUs from "../../pages/public/AboutUs";
import Courses from "../../pages/public/Courses";
import Home from "../../pages/public/Home";
import { Login } from "../../pages/public/Login";
import Registration from "../../pages/public/Registration";
import { TutorLogin } from "../../pages/public/TutorLogin";
import TutorRegistration from "../../pages/public/TutorRegistraion";

export default function PublicRoutes() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tutor/login" element={<TutorLogin />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/tutor/signup" element={<TutorRegistration />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Box>
  );
}

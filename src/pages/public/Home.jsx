import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import colors from "../../assets/colors";
import Kid from "../../assets/images/kid.jpg";
import Kid2 from "../../assets/images/kid2.jpg";
import Kid3 from "../../assets/images/b2ap3_large_make_quran_learning_fun_for_kids.jpg";
import { HeroSection } from "../../components/HeroSection";
import WhyChooseUsSection from "../../components/WhyChooseUsSection";
import CoursesSection from "../../components/CoursesSection";
import TestimonialsSection from "../../components/Testimonial";

const Home = () => {
  return (
    <Box>
      <HeroSection />
      <WhyChooseUsSection />
      <CoursesSection />
      <TestimonialsSection />
    </Box>
  );
};

export default Home;

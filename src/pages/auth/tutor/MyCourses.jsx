import { BiSearch } from "react-icons/bi";

import {
  Box,
  Divider,
  Heading,
  Input,
  InputGroup,
  Icon,
  InputRightAddon,
  useToast,
  position,
  RadioGroup,
  Radio,
  VStack,
  Button,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import CreateCourseModal from "../../../components/Modal/CreateCourseModal";
import { useGetAllCourseByTutorQuery } from "../../../services/course.service";
import TutorCoursesCard from "../../../components/Courses/TutorCoursesCard";



export default function MyCourses() {
  const toast = useToast();

  const [courses, setCourses] = React.useState([]);

  const { data, isSuccess } = useGetAllCourseByTutorQuery();

  useEffect(() => {
    if (isSuccess) {
      setCourses(data.courses);
    }
  }, [data]);

  return (
    <Box
      overflowX="hidden"
      w="100%"
      display={"flex"}
      justifyContent={"center"}
      flexDir={{ base: "column", md: "row" }}
      mt={"24"}
      gap={6}>
      <Box w={{ base: "100%", md: "60%" }}>
        <Box display={'flex'} alignItems={'center'}>
          <CreateCourseModal><Button size={{ base: "sm", md: "md" }} colorScheme='blue' variant='outline'>Create New Course</Button></CreateCourseModal>
          <Heading w='80%' fontSize={{ base: "md", md: "lg" }} textAlign={"center"} mb={3}>Courses List</Heading>
        </Box>
        <Divider my={3} />
        <Box display={"grid"} gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} gap={4}>
          {courses.map((course) => (
            <TutorCoursesCard key={course.id} course={course} />
          ))}
        </Box>
      </Box>
      <Box
        w={{ base: "100%", md: "30%" }}
        mt={16}
        display="flex"
        alignItems={{ base: "center", md: "flex-end" }}
        flexDir="column"
        gap={4}>
        <InputGroup w="70%">
          <Input type="search" placeholder="Search" />
          <InputRightAddon>
            <Icon as={BiSearch} />
          </InputRightAddon>
        </InputGroup>
        <Box w='100%' display={'flex'} justifyContent='center' flexDir='column' alignItems={{ base: "center", md: 'flex-end' }}>
          <Heading w={'80%'} alignSelf='start' textAlign={'center'} fontSize='md'>Fillers</Heading>
          <Divider w={'65%'} textAlign={'center'} fontSize='md' my={1} />
          <Heading w={'60%'} textAlign={{ base: 'start', md: 'center' }} fontSize='sm' my={1} >Price Range</Heading>
          <RadioGroup w={'65%'} textAlign={'center'} fontSize='md' my={1} defaultValue="0">
            <VStack spacing={2} align="left" divider={<Divider />}>
              <Radio value="0">0</Radio>
              <Radio value="5000-10000">5000-10000</Radio>
              <Radio value="10000-15000">10000-15000</Radio>
              <Radio value="15000-20000">15000-20000</Radio>
              <Radio value="20000-25000">20000-25000</Radio>
            </VStack>
          </RadioGroup>
          <Box>

          </Box>
        </Box>

      </Box>
    </Box>
  );
}

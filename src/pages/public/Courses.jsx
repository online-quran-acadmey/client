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
  IconButton,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import AllCourses from "../../components/Courses/AllCourses";
import { useGetAllCourseQuery, useLazySearchCourseQuery } from "../../services/course.service";
import { useFormik } from "formik";

export default function Courses() {
  const toast = useToast();

  const [courses, setCourses] = React.useState([]);

  const { data, isSuccess, isLoading, isError, error } = useGetAllCourseQuery();

  const [searchCourse] = useLazySearchCourseQuery();

  const Formik = useFormik({
    initialValues: {
      search: ""
    },
    onSubmit: (values) => {
      searchCourse(values.search).then(({ data, isSuccess, isError, error }) => {
        if (isSuccess) {
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
      })
    }
  })

  useEffect(() => {
    if (isSuccess) {
      setCourses(data?.data);
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
  }, [data]);

  return (
    <Box
      overflowX="hidden"
      w="100%"
      display={"flex"}
      flexDir={{ base: "column", md: "row" }}
      justifyContent={"center"}
      mt={"24"}
      gap={6}>
      <Box w={{ base: '100%', md: "60%" }}>
        <Heading textAlign={"center"} mb={3}>
          Courses List
        </Heading>
        <Divider my={3} />
        <AllCourses courses={courses} />
      </Box>
      <Box
        w={{ base: "100%", md: "30%" }}
        mt={16}
        display="flex"
        alignItems={{ base: 'center', md: "flex-end" }}
        flexDir="column"
        gap={4}>
        <InputGroup as={'form'} onSubmit={Formik.handleSubmit} w="70%">
          <Input type="search" {...Formik.getFieldProps("search")} placeholder="Search" />
          <InputRightAddon p={0}>
            <IconButton icon={<BiSearch />} aries-label='search' type="submit" />
          </InputRightAddon>
        </InputGroup>
        <Box w='100%' display={'flex'} justifyContent='center' flexDir='column' alignItems={{ base: 'center', md: 'flex-end' }}>
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

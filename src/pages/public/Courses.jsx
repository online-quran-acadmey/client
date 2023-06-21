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
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import AllCourses from "../../components/Courses/AllCourses";
import { useGetAllCourseQuery } from "../../services/course.service";

export default function Courses() {
  const toast = useToast();

  const [courses, setCourses] = React.useState([]);

  const { data, isSuccess, isLoading, isError, error } = useGetAllCourseQuery();

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
      justifyContent={"center"}
      mt={"24"}
      gap={6}>
      <Box w={"60%"}>
        <Heading textAlign={"center"} mb={3}>
          Courses List
        </Heading>
        <Divider my={3} />
        <AllCourses courses={courses} />
      </Box>
      <Box
        w={"30%"}
        mt={16}
        display="flex"
        alignItems={"flex-end"}
        flexDir="column"
        gap={4}>
        <InputGroup w="70%">
          <Input type="search" placeholder="Search" />
          <InputRightAddon>
            <Icon as={BiSearch} />
          </InputRightAddon>
        </InputGroup>
        <Box w='100%' display={'flex'} justifyContent='center' flexDir='column' alignItems={'flex-end'}>
          <Heading w={'80%'} alignSelf='start' textAlign={'center'} fontSize='md'>Fillers</Heading>
          <Divider w={'65%'} textAlign={'center'} fontSize='md' my={1} />
          <Heading w={'60%'} textAlign={'center'} fontSize='sm' my={1} >Price Range</Heading>
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

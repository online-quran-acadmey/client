import {
  Box,
  Button,
  Divider,
  Heading,
  Image,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import colors from "../../assets/colors";
import kid from "../../assets/images/kid.jpg";

export default function CourseCard({ course }) {

  const loginInfo = useSelector(state => state.login);

  const navigate = useNavigate();

  const handelEnroll = () => {
    if (loginInfo.login) { }
    else {
      navigate("/login");
    }
  }


  return (
    <Box
      maxW={"300px"}
      maxH={"430px"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden">
      <Image src={kid} alt="kid" h={"200px"} w={"100%"} objectFit="cover" />
      <VStack p={6} align="left" divider={<Divider />}>
        <Box>
          <Heading fontSize={"lg"} color={colors.primary}>
            {course?.name}
          </Heading>
          <Text>{course?.description.slice(0, 50)}</Text>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          w="100%">
          <Button
            size={"sm"}
            bgColor={colors.primary}
            color={colors.secondaryLight}
            transition="all 0.3s ease-in-out"
            _hover={{ bgColor: colors.primaryLight }}
            onClick={handelEnroll}
          >
            Enroll
          </Button>
          <Box>
            <Stat>
              <StatLabel>Collected Fees</StatLabel>
              <StatNumber>{course?.price}</StatNumber>
              <StatHelpText>Feb 12 - Feb 28</StatHelpText>
            </Stat>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
}

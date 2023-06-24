import { Avatar, Box, Button, Flex, Heading, Image, Stack, Text, useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import kid from "../../assets/images/kid.jpg";
import { useRequestEnrollMutation } from "../../services/course.service";
function CourseCard({ course }) {

    const navigate = useNavigate();

    const { login } = useSelector(state => state.login);

    const { id, name, description, rating, tutor, price, discount, enrolledStudents } = course;

    const [requestEnroll] = useRequestEnrollMutation();

    const toast = useToast();

    const handleEnroll = (id) => {
        if (login) {
            requestEnroll({
                courseId: id
            }).then(res => {
                if (res.data) {
                    toast({
                        title: 'Success',
                        description: res.data.message,
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                        position: 'top',
                        variant: 'left-accent'
                    })
                }
                if (res.error) {
                    toast({
                        title: 'Error',
                        description: res.error.data.message,
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                        position: 'top',
                        variant: 'left-accent'
                    })
                }
            }).catch(err => {
                toast({
                    title: 'Error',
                    description: err.data.message,
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                    position: 'top',
                    variant: 'left-accent'
                })
            })
        }
        else {
            navigate('/login')
        }
    }

    return (
        <Box borderWidth="1px" borderRadius="md" borderColor="gray.200" overflow="hidden">
            <Image src={kid} alt={name} objectFit="cover" boxSize="280px" />
            <Box p={4}>
                <Heading as="h3" size="lg" mb={2}>
                    {name}
                </Heading>
                <Text mb={4}>{description.slice(0, 50)}</Text>
                <Flex alignItems="center" mb={4}>
                    <Text fontSize="sm" mr={2}>
                        {rating}
                    </Text>
                    <Box as="span" color="orange.500">
                        ★★★★★
                    </Box>
                </Flex>
                <Stack direction={{ base: "column", md: "column" }} spacing={4} mb={4}>
                    <Button colorScheme="green" w={'100%'} onClick={() => handleEnroll(id)}>
                        Enroll Now
                    </Button>
                    <Stack direction="row" spacing={2}>
                        <Text fontSize="xl" fontWeight="bold" mb={2}>
                            ${price}
                        </Text>
                        <Text fontSize="sm" textDecoration="line-through" color="gray.500">
                            ${discount}
                        </Text>
                        {/* <Box
                            bg="green.100"
                            color="green.800"
                            borderRadius="md"
                            fontSize="sm"
                            fontWeight="semibold"
                            mt={2}
                        >
                            {discount}% off
                        </Box> */}
                    </Stack>
                </Stack>
                {/* <Flex alignItems="center">
                    <Avatar name={`${tutor.firstName} ${tutor.lastName}`} />
                    <Box>
                        <Text fontSize="sm" fontWeight="bold">
                            {tutor.firstName}
                        </Text>
                        <Text fontSize="sm">{tutor.firstName}</Text>
                    </Box>
                    <Box ml="auto">
                        {enrolledStudents > 0 && (
                            <Flex alignItems="center">
                                <Text fontSize="sm" mr={2}>
                                    {enrolledStudents} already enrolled
                                </Text>
                                <Stack direction="row" spacing={-2}>
                                    {Array.from({ length: enrolledStudents }, (_, i) => (
                                        <Box key={i} as="img" src="https://bit.ly/3kQBhjz" alt="User Avatar" boxSize="24px" borderRadius="full" border="2px" borderColor="white" />
                                    ))}
                                </Stack>
                            </Flex>
                        )}
                    </Box>
                </Flex> */}
            </Box >
        </Box >
    );
}

export default CourseCard;

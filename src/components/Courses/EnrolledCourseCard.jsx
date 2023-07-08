import { Avatar, AvatarGroup, Box, Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import kid from "../../assets/images/kid.jpg";
function EnrolledCourseCard({ course }) {
    const { image, name, description, rating, tutor, price, discount, enrolledStudents } = course;

    return (
        <Box borderWidth="1px" borderRadius="md" borderColor="gray.200" overflow="hidden">
            <Image src={kid} alt={name} objectFit="cover" boxSize={{ base: "400px", md: "280px" }} />
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
                    <Stack direction="row" spacing={2}>
                        <Text fontSize="xl" fontWeight="bold" mb={2}>
                            ${price}
                        </Text>
                        <Text fontSize="sm" textDecoration="line-through" color="gray.500">
                            ${discount}
                        </Text>
                    </Stack>
                </Stack>
                <AvatarGroup size='md' max={2}>
                    <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                    <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                    <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                    <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                </AvatarGroup>
            </Box >
        </Box >
    );
}

export default EnrolledCourseCard;

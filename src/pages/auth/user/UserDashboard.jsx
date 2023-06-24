import { Box, Center, Flex, Grid, Heading, IconButton, SimpleGrid, Stat, StatHelpText, StatLabel, StatNumber, Text } from "@chakra-ui/react";
import { CalendarIcon, ChevronDownIcon, CheckIcon } from "@chakra-ui/icons";

const StudentDashboard = () => {
    return (
        <Box maxW="1200px" mx="auto" mt="40px" p="20px">
            <Flex mb="40px" justify="space-between">
                <Heading as="h2" size="xl">Dashboard</Heading>
                <IconButton icon={<ChevronDownIcon />} aria-label="Show more options" size="lg" />
            </Flex>
            <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="20px">
                <Box>
                    <Heading as="h3" size="md" mb="10px">My Courses</Heading>
                    <Flex alignItems="center" mb="10px">
                        <CalendarIcon mr="10px" />
                        <Text mr="10px">Next course starts on:</Text>
                        <Text fontWeight="bold">July 15, 2022</Text>
                    </Flex>
                    <SimpleGrid columns={2} spacing="20px">
                        <Stat>
                            <StatLabel>Total Courses</StatLabel>
                            <StatNumber>3</StatNumber>
                            <StatHelpText>1 new course this month</StatHelpText>
                        </Stat>
                        <Stat>
                            <StatLabel>Completed Courses</StatLabel>
                            <StatNumber>1</StatNumber>
                            <StatHelpText>Quran Reading</StatHelpText>
                        </Stat>
                    </SimpleGrid>
                </Box>
                <Box>
                    <Heading as="h3" size="md" mb="10px">Notifications</Heading>
                    <Center borderWidth="1px" borderRadius="lg" p="20px" h="200px">
                        <Text color="gray.500">No new notifications</Text>
                    </Center>
                </Box>
            </SimpleGrid>
            <Box mt="40px">
                <Heading as="h3" size="md" mb="10px">My Progress</Heading>
                <SimpleGrid columns={2} spacing="20px">
                    <Box borderWidth="1px" borderRadius="lg" p="20px">
                        <Text mb="10px">Current Course:</Text>
                        <Text fontWeight="bold">Quran Memorization</Text>
                        <Text mt="10px" color="gray.500">Lesson 3 of 10</Text>
                    </Box>
                    <Box borderWidth="1px" borderRadius="lg" p="20px">
                        <Text mb="10px">Recent Activity:</Text>
                        <Text fontWeight="bold">Completed Quran Reading</Text>
                        <Flex mt="10px" alignItems="center">
                            <Text mr="5px" color="gray.500">July 5, 2022</Text>
                            <CheckIcon />
                        </Flex>
                    </Box>
                </SimpleGrid>
            </Box>
            <Box mt="40px">
                <Heading as="h3" size="md" mb="10px">Recommended Courses</Heading>
                <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                    <Box borderWidth="1px" borderRadius="lg" p="20px">
                        <Text mb="10px">Course:</Text>
                        <Text fontWeight="bold">Arabic Grammar</Text>
                        <Text mt="10px" color="gray.500">Lesson 1 of 3</Text>
                    </Box>
                    <Box borderWidth="1px" borderRadius="lg" p="20px">
                        <Text mb="10px">Course:</Text>
                        <Text fontWeight="bold">Quran Reading</Text>
                        <Text mt="10px" color="gray.500">Lesson 2 of 10</Text>
                    </Box>
                </Grid>
            </Box>
        </Box>

    );
}


export default StudentDashboard;
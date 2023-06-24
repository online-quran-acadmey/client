import { Box, Center, Flex, Heading, IconButton, SimpleGrid, Stat, StatHelpText, StatLabel, StatNumber, Text } from "@chakra-ui/react";
import { AddIcon, CalendarIcon, CheckIcon, ChevronDownIcon, InfoIcon } from "@chakra-ui/icons";
import TutorNotification from "../../../components/TutorNotification";

const TutorDashboard = () => {



    return (
        <Box maxW="1200px" mx="auto" mt="40px" p="20px">
            <Flex mb="40px" justify="space-between">
                <Heading as="h2" size="xl">Dashboard</Heading>
                <IconButton icon={<AddIcon />} aria-label="Add new course" size="lg" />
            </Flex>
            <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="20px">
                <Box>
                    <Heading as="h3" size="md" mb="10px">Courses</Heading>
                    <Flex alignItems="center" mb="10px">
                        <CalendarIcon mr="10px" />
                        <Text mr="10px">Next course starts on:</Text>
                        <Text fontWeight="bold">July 15, 2022</Text>
                    </Flex>
                    <SimpleGrid columns={2} spacing="20px">
                        <Stat>
                            <StatLabel>Total Courses</StatLabel>
                            <StatNumber>15</StatNumber>
                            <StatHelpText>4 new courses this month</StatHelpText>
                        </Stat>
                        <Stat>
                            <StatLabel>Enrolled Students</StatLabel>
                            <StatNumber>250</StatNumber>
                            <StatHelpText>50 new students this month</StatHelpText>
                        </Stat>
                    </SimpleGrid>
                </Box>
                <Box>
                    <Heading as="h3" size="md" mb="10px">Notifications</Heading>
                    <Box borderWidth="1px" borderRadius="lg" p="20px" h="200px">

                    </Box>
                </Box>
            </SimpleGrid>
            <Box mt="40px">
                <Heading as="h3" size="md" mb="10px">Recent Activity</Heading>
                <SimpleGrid columns={3} spacing="20px">
                    <Box borderWidth="1px" borderRadius="lg" p="20px">
                        <Text mb="10px">New course added:</Text>
                        <Text fontWeight="bold">Quran Memorization</Text>
                        <Text mt="10px" color="gray.500">July 10, 2022</Text>
                    </Box>
                    <Box borderWidth="1px" borderRadius="lg" p="20px">
                        <Text mb="10px">New student enrolled:</Text>
                        <Text fontWeight="bold">Fatima Ahmed</Text>
                        <Text mt="10px" color="gray.500">July 8, 2022</Text>
                    </Box>
                    <Box borderWidth="1px" borderRadius="lg" p="20px">
                        <Text mb="10px">Course completed:</Text>
                        <Text fontWeight="bold">Quran Reading</Text>
                        <Flex mt="10px" alignItems="center">
                            <Text mr="5px" color="gray.500">July 5, 2022</Text>
                            <CheckIcon />
                        </Flex>
                    </Box>
                </SimpleGrid>
                <Flex mt="20px" justify="center">
                    <IconButton icon={<ChevronDownIcon />} aria-label="Show more activity" size="lg" />
                </Flex>
                <Flex mt="20px" justify="center">
                    <IconButton icon={<InfoIcon />} aria-label="Show more activity" size="lg" />
                    <Text ml="10px" color="gray.500">Showing all activity</Text>
                    <Text ml="10px" color="gray.500">(1-3 of 3)</Text>
                    <Text ml="10px" color="gray.500">(1-3 of 3)</Text>

                </Flex>
            </Box>
        </Box>

    );
};

export default TutorDashboard;

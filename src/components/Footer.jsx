import { Box, Divider, Flex, Heading, HStack, IconButton, Link, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import colors from '../assets/colors'
import { tutorLinks, userLinks, pubicLink } from '../helpers/NavLinks'
import { Link as RouterLink } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const [quickLinks, setQuickLinks] = useState([]);
  const { login, tutor } = useSelector(state => state.login);

  useEffect(() => {
    if (login && tutor) {
      setQuickLinks(tutorLinks)
    }
    else if (!tutor && login) {
      setQuickLinks(userLinks)
    }
    else {
      setQuickLinks(pubicLink)
    }
  }, [])

  return (
    <Box bg={colors.primary} color={colors.secondary} px={4} py={8} as="footer" mt={8}>
      <Flex direction={{ base: "column", md: "row" }} maxW={{ xl: "1200px" }} mx="auto" justify="space-between">
        <Box>
          <Text textAlign={{ base: "center", md: "left" }} fontSize="xl" fontWeight="bold" mb={2}>
            My Company
          </Text>
          <Text textAlign={{ base: "center", md: "left" }} mb={4}>We provide the best services for our customers.</Text>
          <HStack spacing={4} justifyContent={{ base: "center", md: "left" }}>
            <IconButton
              as={Link}
              href="#"
              aria-label="Facebook"
              icon={<FaFacebook />}
              variant="ghost"
              size="lg"
              color={colors.secondaryLight}
              _hover={{ color: "#1877f2" }}
            />
            <IconButton
              as={Link}
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter />}
              variant="ghost"
              size="lg"
              color={colors.secondaryLight}
              _hover={{ color: "#1DA1F2" }}
            />
            <IconButton
              as={Link}
              href="#"
              aria-label="Instagram"
              icon={<FaInstagram />}
              variant="ghost"
              size="lg"
              color={colors.secondaryLight}
              _hover={{ color: '#E1306C' }}
            />
          </HStack>
        </Box>
        <Box display={{ base: "flex", md: "block" }} justifyContent={{ base: "center", md: "left" }} flexDir={'column'}>
          <Text textAlign={{ base: "center", md: "left" }} fontSize="lg" fontWeight="bold" mb={4}>
            Quick Links
          </Text>
          <div>
            {quickLinks.map((link) => {
              return <Link display={{ base: 'inline-block', md: "block" }} mx={{ base: 2, md: 0 }} mb={2} as={RouterLink} to={link.link} key={link.id}>{link.text}</Link>
            })}
          </div>
        </Box>
        <Box>
          <Text fontSize="lg" fontWeight="bold" mb={4}>
            Contact Us
          </Text>
          <Link display="block" mb={2} href="mailto:contact@mycompany.com">
            contact@mycompany.com
          </Link>
          <Text mb={2}>123 Main Street</Text>
          <Text mb={2}>Anytown, USA 12345</Text>
          <Text mb={2}>555-555-5555</Text>
        </Box>
      </Flex >
    </Box >
  )
}

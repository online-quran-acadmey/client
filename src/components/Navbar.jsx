import {
  Avatar,
  Box,
  Button,
  FormControl,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import colors from "../assets/colors";
import { Link } from "react-router-dom";
import { HamburgerIcon, Search2Icon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import { pubicLink, tutorLinks, userLinks } from "../helpers/NavLinks";
import ProfileMenu from "./Menu/ProfileMenu";

export default function Navbar() {
  const loginInfo = useSelector((state) => state.login);

  const { user } = useSelector((state) => state.user);

  const location = useLocation();

  const [links, setLinks] = useState([]);


  useEffect(() => {
    if (loginInfo.login && !loginInfo.tutor) {
      setLinks(userLinks);
    } else if (loginInfo.login && loginInfo.tutor) {
      setLinks(tutorLinks);
    } else setLinks(pubicLink);

  }, [loginInfo.login]);

  return (
    <Box
      p={4}
      display={
        location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/tutor/signup" || location.pathname === "/tutor/login"
          ? "none"
          : "flex"
      }
      justifyContent="space-between"
      alignItems="center"
      h="70px"
      borderBottom="1px"
      borderBottomColor={colors.primaryLight}
      boxShadow={"lg"}
      zIndex={100}>
      <Heading
        fontSize={{ base: "md", md: "lg" }}
        w="111px"
        display="flex"
        fontStyle={"italic"}>
        <Text>Online</Text>
        <Text color={colors.primary}>Quran</Text>
        <Text>Academy</Text>
      </Heading>

      <Box
        display={{ base: "none", md: "flex" }}
        justifyContent="space-between"
        gap={6}>
        {links.map((link) => {
          return (
            <Text
              key={link.id}
              as={Link}
              to={link.link}
              fontWeight={"medium"}
              color={location.pathname === link.link ? colors.primary : "black"}
              borderBottom={location.pathname === link.link ? "2px" : "none"}
              borderBottomColor={
                location.pathname === link.link ? colors.primary : "none"
              }
              _hover={{
                borderBottom: "2px",
                borderBottomColor: colors.primaryLight,
              }}
              cursor="pointer"
              transition="all 0.3s ease-in-out">
              {link.text}
            </Text>
          );
        })}
      </Box>

      {!loginInfo.login ? (
        <Box
          display={{ base: "none", md: "flex" }}
          justifyContent="flex-end"
          gap={2}>
          <Button
            as={Link}
            to={"/login"}
            bgColor={colors.primary}
            color={"white"}
            _hover={{ bgColor: colors.primaryLight }}>
            Login/Register
          </Button>
          <Button
            variant={"outline"}
            border={"1px"}
            borderColor={colors.primary}>
            Contact Us
          </Button>
        </Box>
      ) : (
        <Box
          display={{ base: "none", md: "flex" }}
          justifyContent="flex-end"
          gap={2}
          alignItems="center">
          <InputGroup>
            <Input type="search" placeholder="Search" />
            <InputRightElement>
              <Search2Icon />
            </InputRightElement>
          </InputGroup>
          <ProfileMenu>
            <Avatar name={`${user.firstName} ${user.lastName}`} />
          </ProfileMenu>
        </Box>
      )}
      <Box display={{ base: "flex", md: "none" }}>
        <IconButton
          icon={<HamburgerIcon />}
          aries-label="menu"
          colorScheme="red"
        />
      </Box>
    </Box>
  );
}

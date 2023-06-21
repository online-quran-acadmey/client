import {
  EmailIcon,
  UnlockIcon,
  ViewIcon,
  ViewOffIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import colors from "../../assets/colors";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleFill } from "react-icons/ri";
import { useFormik } from "formik";
import * as yup from "yup";
import { useUserLoginMutation } from "../../services/userAuth.service";
import { setLogin } from "../../states/loginInfo.state";
import { setUser } from "../../states/user.state";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import cookie from "react-cookies";

export default function LoginForm() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const toast = useToast();

  const [show, setShow] = useState(false);

  const [login] = useUserLoginMutation();

  const Formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      login(values)
        .then((res) => {
          if (res.data) {
            toast({
              title: "Success",
              description: "Login Successful",
              isClosable: true,
              status: "success",
              duration: 5000,
              position: "top",
              variant: "left-accent",
            });
            console.log(res.data);
            dispatch(
              setLogin({
                login: true,
                token: res.data.token,
                expiresIn: "",
                tutor: false,
              })
            );
            dispatch(setUser(res.data.user));
            cookie.save("token", `${res.data.token}`, { path: "/" });
            cookie.save("tutor", { tutor: false }, { path: "/" });
            cookie.save("user", JSON.stringify(res.data.user), { path: "/" });
            navigate("/", { replace: true });
          }
          if (res.error) {
            toast({
              title: "Error",
              description: res.error.data.message,
              isClosable: true,
              status: "error",
              duration: 5000,
              position: "top",
              variant: "left-accent",
            });
          }
        })
        .catch((e) => {
          toast({
            title: "Error",
            description: e.message,
            isClosable: true,
            status: "error",
            duration: 5000,
            position: "top",
            variant: "left-accent",
          });
        });
    },
    validationSchema: yup.object({
      email: yup.string().email("Invalid email address").required("Required"),
      password: yup.string().required("Required"),
    }),
  });

  return (
    <Box
      mt={4}
      as={"form"}
      onSubmit={Formik.handleSubmit}
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      gap={6}>
      <Heading textAlign="center" fontSize="2xl" color={colors.primaryLight}>
        User Login
      </Heading>
      <FormControl
        mt={2}
        isRequired
        isInvalid={Formik.touched.email && Formik.errors.email}>
        <InputGroup>
          <Input
            placeholder="Email"
            type="email"
            {...Formik.getFieldProps("email")}
          />
          <InputLeftElement>
            <EmailIcon />
          </InputLeftElement>
        </InputGroup>
        <FormErrorMessage>{Formik.errors.email}</FormErrorMessage>
      </FormControl>
      <FormControl
        mt={2}
        isRequired
        isInvalid={Formik.touched.password && Formik.errors.password}>
        <InputGroup>
          <Input
            placeholder="Password"
            type={!show ? "password" : "text"}
            {...Formik.getFieldProps("password")}
          />
          <InputLeftElement>
            <UnlockIcon />
          </InputLeftElement>
          <InputRightElement onClick={() => setShow(!show)}>
            {show ? <ViewIcon /> : <ViewOffIcon />}
          </InputRightElement>
        </InputGroup>
        <FormErrorMessage>{Formik.errors.password}</FormErrorMessage>
      </FormControl>
      <Box
        alignSelf={"flex-end"}
        mt={"-13px"}
        fontSize={"sm"}
        color={"gray.500"}>
        <Text
          cursor={"pointer"}
          _hover={{ color: "blue.500", textDecoration: "underline" }}>
          Forgot Password?
        </Text>
      </Box>

      <Button
        bgColor={colors.primary}
        color={colors.secondaryLight}
        _hover={{ bgColor: colors.primaryLight }}
        type="submit">
        Login
      </Button>

      <Box
        display={"flex"}
        w="100%"
        alignItems={"center"}
        justifyContent="center"
        gap={3}>
        <Divider w={"30%"} />
        <Text w={"10%"} color={"gray.500"} fontSize={"sm"}>
          OR
        </Text>
        <Divider w={"30%"} />
      </Box>

      <Box
        display={"flex"}
        w="100%"
        alignItems={"center"}
        justifyContent="center"
        gap={3}>
        <Button leftIcon={<FcGoogle />} colorScheme={"green"}>
          Login with Google
        </Button>
        <Button leftIcon={<RiFacebookCircleFill />} colorScheme={"facebook"}>
          Login with Facebook
        </Button>
      </Box>

      <Box
        display={"flex"}
        w="100%"
        alignItems={"center"}
        justifyContent="center"
        gap={3}>
        <Box w={"40%"}>
          <Text
            cursor="pointer"
            fontSize="sm"
            fontWeight="bold"
            _hover={{
              color: `${colors.primaryLight}`,
              textDecoration: "underline",
            }}
            onClick={() => navigate("/signup", { replace: true })}>
            Don't have a account?
          </Text>
        </Box>
        <Text w={"10%"} color={"gray.500"} fontSize={"sm"}>
          OR
        </Text>
        <Box w={"30%"}>
          <Text
            cursor="pointer"
            fontSize="sm"
            fontWeight="bold"
            _hover={{
              color: `${colors.primaryLight}`,
              textDecoration: "underline",
            }}
            onClick={() => navigate("/tutor/login", { replace: true })}>
            Login as a tutor
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

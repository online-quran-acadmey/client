import { FaFacebook, FaUser } from "react-icons/fa";
import {
  FormControl,
  InputGroup,
  InputLeftElement,
  Icon,
  Input,
  Box,
  Heading,
  Select,
  Button,
  Divider,
  Text,
  FormErrorMessage,
  useToast,
  InputRightElement,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React, { useState } from "react";
import { userRegistrationData } from "../../helpers/UserRegisterationData";
import colors from "../../assets/colors";
import { BsCalendarEventFill } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";
import { GrGoogle } from "react-icons/gr";
import * as yup from "yup";
import { Form, useNavigate } from "react-router-dom";
import { useUserRegisterMutation } from "../../services/userAuth.service";
import { useDispatch } from "react-redux";
import { setLogin } from "../../states/loginInfo.state";
import cookie from 'react-cookies'
import { setUser } from "../../states/user.state";
import { BiShow, BiShowAlt } from "react-icons/bi";
import { RiEyeCloseFill } from "react-icons/ri";

export default function RegistrationForm() {

  const [show, setShow] = useState(false)

  const toast = useToast();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [userRegister] = useUserRegisterMutation();

  const Formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      middleName: "",
      email: "",
      password: "",
      confirmPassword: "",
      dateOfBirth: "",
      gender: "",
      address: "",
      contactNumber: "",
      parentGuardianName: "",
      parentGuardianContact: "",
    },
    onSubmit: (values) => {
      userRegister(values).then((res) => {
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

        else if (res.error) {
          console.log(res.error)
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

      }
      )
    },
    validationSchema: yup.object({
      firstName: yup.string().required("First Name is required"),
      lastName: yup.string().required("Last Name is required"),
      email: yup.string().email("Invalid email").required("Email is required"),
      password: yup
        .string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
      dateOfBirth: yup.string().required("Date of Birth is required"),
      gender: yup.string().required("Gender is required"),
      address: yup.string().required("Address is required"),
      contactNumber: yup.string().required("Contact Number is required"),
      parentGuardianName: yup
        .string()
        .required("Parent/Guardian Name is required"),
      parentGuardianContact: yup
        .string()
        .required("Parent/Guardian Contact is required"),
    }),
  });

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      gap={4}
      as={"form"}
      onSubmit={Formik.handleSubmit}>
      <Heading
        w={"100%"}
        textAlign={"center"}
        fontSize={"2xl"}
        color={colors.primaryLight}>
        Register as User
      </Heading>
      {userRegistrationData.map((field) => {
        return (
          <FormControl
            key={field.name}
            w="32%"
            mt={4}
            isInvalid={Formik.errors[field.name] && Formik.touched[field.name]}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Icon as={field.leftIcon} />}
              />
              <Input
                type={field.type}
                placeholder={field.placeholder}
                {...Formik.getFieldProps(field.name)}
              />
            </InputGroup>
            <FormErrorMessage fontStyle={"italic"}>
              {Formik.errors[field.name] &&
                Formik.touched[field.name] &&
                Formik.errors[field.name]}
            </FormErrorMessage>
          </FormControl>
        );
      })}

      <FormControl
        w="32%"
        mt={4}
        isRequired
        isInvalid={Formik.touched.gender && Formik.errors.gender}>
        <Select placeholder="Gender" {...Formik.getFieldProps("gender")}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>
        <FormErrorMessage fontStyle={"italic"}>
          {Formik.errors.gender}
        </FormErrorMessage>
      </FormControl>

      <FormControl
        w="32%"
        mt={4}
        isRequired
        isInvalid={Formik.touched.dateOfBirth && Formik.errors.dateOfBirth}>
        <InputGroup>
          <Input
            type="date"
            placeholder="Date of Birth"
            {...Formik.getFieldProps("dateOfBirth")}
            pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
          />
          <InputLeftElement>
            <Icon as={BsCalendarEventFill} />
          </InputLeftElement>
        </InputGroup>
        <FormErrorMessage fontStyle={"italic"}>
          {Formik.errors.dateOfBirth}
        </FormErrorMessage>
      </FormControl>

      <FormControl
        w="32%"
        mt={4}
        isRequired
        isInvalid={Formik.touched.password && Formik.errors.password}>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Password"
            {...Formik.getFieldProps("password")}
          />
          <InputLeftElement>
            <Icon as={AiFillLock} />
          </InputLeftElement>
          <InputRightElement onClick={() => setShow(!show)}>
            <Icon as={show ? RiEyeCloseFill : BiShow} />
          </InputRightElement>
        </InputGroup>
        <FormErrorMessage fontStyle={"italic"}>
          {Formik.errors.password}
        </FormErrorMessage>
      </FormControl>

      <FormControl
        w="32%"
        mt={4}
        isRequired
        isInvalid={
          Formik.touched.confirmPassword && Formik.errors.confirmPassword
        }>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Confirm Password"
            {...Formik.getFieldProps("confirmPassword")}
          />
          <InputLeftElement>
            <Icon as={AiFillLock} />
          </InputLeftElement>
        </InputGroup>
        <FormErrorMessage fontStyle={"italic"}>
          {Formik.errors.confirmPassword}
        </FormErrorMessage>
      </FormControl>

      <Box
        w={"100%"}
        display={"flex"}
        justifyContent={"center"}
        mt={4}
        alignItems="center">
        <Button
          bgColor={colors.primaryLight}
          color={colors.secondaryLight}
          _hover={{}}
          type="submit">
          Register
        </Button>
      </Box>

      <Box
        w={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems="center"
        gap={2}>
        <Divider w={"30%"} />
        <Text color={"gray.500"}>OR</Text>
        <Divider w={"30%"} />
      </Box>

      <Box
        w={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems="center"
        gap={2}>
        <Button colorScheme={"green"} w={"30%"} leftIcon={<GrGoogle />}>
          SignUp With Google
        </Button>
        <Button colorScheme={"facebook"} w={"30%"} leftIcon={<FaFacebook />}>
          SignUp With Facebook
        </Button>
      </Box>

      <Box
        w={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems="center"
        gap={2}
        mt={4}>
        <Button
          variant={"ghost"}
          w={"30%"}
          _hover={{
            color: `${colors.primaryLight}`,
            bgColor: "transparent",
            textDecoration: "underline",
          }}
          onClick={() => navigate("/login", { replace: true })}>
          Already have an account? Sign In
        </Button>
        <Divider orientation="vertical" h={"100%"} w={"3px"} />
        <Button
          variant={"ghost"}
          w={"30%"}
          _hover={{
            color: `${colors.primaryLight}`,
            bgColor: "transparent",
            textDecoration: "underline",
          }}
          onClick={() => navigate("/tutor/signup", { replace: true })}
        >
          Register as a tutor
        </Button>
      </Box>
    </Box>
  );
}

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
    Textarea,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import { userRegistrationData } from "../../helpers/UserRegisterationData";
import colors from "../../assets/colors";
import { BsCalendarEventFill } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";
import { GrGoogle } from "react-icons/gr";
import * as yup from "yup";
import { Form, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../states/loginInfo.state";
import cookie from 'react-cookies'
import { setUser } from "../../states/user.state";
import { tutorRegistrationData } from "../../helpers/TutorRegestraionData";
import { useTutorCreateMutation } from "../../services/tutorAuth.service";

export default function TutorRegistrationForm() {

    const toast = useToast();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [createTutor] = useTutorCreateMutation();


    const Formik = useFormik({
        initialValues: {
            firstName: "",
            middleName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            password: "",
            confirmPassword: "",
            biography: "",
            specialization: "",
            address: "",
            dateOfBirth: "",
            gender: "",
            idCard: ""
        },
        onSubmit: (values) => {
            createTutor(values)
                .then((res) => {
                    if (res.data) {

                        toast({
                            title: "Registration Successful",
                            isClosable: true,
                            duration: 3000,
                            status: "success",
                            position: "top",
                            variant: "left-accent",
                        })
                        dispatch(setLogin({
                            login: true,
                            token: res.data.token,
                            tutor: true
                        }));

                        dispatch(setUser(res.data.user));

                        cookie.save('token', res.data.token, { path: '/' });
                        cookie.save('tutor', { tutor: true }, { path: '/' });
                        cookie.save('user', res.data.user, { path: '/' });
                        navigate("/");

                    }
                    if (res.error) {
                        toast({
                            title: "Registration Failed",
                            description: res.error.data.message,
                            isClosable: true,
                            duration: 3000,
                            status: "error",
                            position: "top",
                            variant: "left-accent",
                        })
                    }
                }
                ).catch((err) => {
                    toast({
                        title: "Registration Failed",
                        description: err.response.data.message,
                        isClosable: true,
                        duration: 3000,
                        status: "error",
                        position: "top",
                        variant: "left-accent",
                    })
                })
        },
        validationSchema: yup.object({
            firstName: yup.string().required("First Name is required"),
            lastName: yup.string().required("First Name is required"),
            email: yup.string().email("Invalid email").required("Email is required"),
            phoneNumber: yup.string().required("Contact Number is required"),
            password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
            confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match").required("Confirm Password is required"),
            biography: yup.string().required("Biography is required"),
            specialization: yup.string().required("Specialization is required"),
            address: yup.string().required("Address is required"),
            dateOfBirth: yup.string().required("Date of Birth is required"),
            gender: yup.string().required("Gender is required"),
            idCard: yup.string().required("ID Card is required"),
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
                Register as Tutor
            </Heading>
            {tutorRegistrationData.map((field) => {
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
                        type="password"
                        placeholder="Password"
                        {...Formik.getFieldProps("password")}
                    />
                    <InputLeftElement>
                        <Icon as={AiFillLock} />
                    </InputLeftElement>
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
                        type="password"
                        placeholder="Password"
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

            <FormControl
                w="100%"
                display={"flex"}
                justifyContent={"center"}
                alignItems="center"
                flexDir='column'
                mt={4}
                isRequired
                isInvalid={Formik.touched.biography && Formik.errors.biography}>
                <Textarea w={"70%"} cols={30} rows={5} placeholder="Biography" {...Formik.getFieldProps("biography")} />
                <FormErrorMessage fontStyle={"italic"}>
                    {Formik.errors.dateOfBirth}
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
                    onClick={() => navigate("/tutor/login", { replace: true })}>
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
                    }}>
                    Register as a user
                </Button>
            </Box>
        </Box>
    );
}

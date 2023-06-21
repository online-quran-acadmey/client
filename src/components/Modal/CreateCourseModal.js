import { Button, FormControl, FormErrorMessage, FormHelperText, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, useDisclosure, useToast, VStack } from "@chakra-ui/react"
import { useFormik } from "formik";
import * as yup from "yup";
import { useCreateCourseMutation } from "../../services/course.service";



export default function CreateCourseModal({ children }) {

    const toast = useToast()

    const { isOpen, onOpen, onClose } = useDisclosure();

    const [createCourse] = useCreateCourseMutation()

    const Formik = useFormik({
        initialValues: {
            name: "",
            description: "",
            price: null,
            rating: 0,
            discount: 0
        },
        onSubmit: (values) => {
            createCourse(values).then((res) => {
                if (res.data) {
                    onClose();
                    Formik.resetForm();
                    toast({
                        title: 'Success',
                        description: res.data.message,
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                        position: 'top',
                        variant: 'left-accent'
                    })
                    console.log(res.data)
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
            }).catch((err) => {
                toast({
                    title: 'Error',
                    description: err.response.data.message,
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                    position: 'top',
                    variant: 'left-accent'
                })
            })
        },
        validationSchema: yup.object({
            name: yup.string().required("Required"),
            description: yup.string().required("Required"),
            price: yup.number().required("Required"),
        })
    })


    return (
        <>
            <span onClick={onOpen}>{children}</span>

            <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
                <ModalOverlay />
                <ModalContent as={'form'} onSubmit={Formik.handleSubmit}>
                    <ModalHeader textAlign={'center'}>Create Course</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack gap={4}>
                            <FormControl isInvalid={Formik.touched.name && Formik.errors.name}>
                                <Input type='text' placeholder='Name' {...Formik.getFieldProps('name')} />
                                <FormErrorMessage fontStyle={'italic'}>{Formik.errors.name}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={Formik.touched.price && Formik.errors.price}>
                                <Input type='number' placeholder='Price' {...Formik.getFieldProps('price')} />
                                <FormErrorMessage fontStyle={'italic'}>{Formik.errors.price}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={Formik.touched.discount && Formik.errors.discount}>
                                <Input type='number' placeholder='Discount' {...Formik.getFieldProps('discount')} />
                                <FormErrorMessage fontStyle={'italic'}>{Formik.errors.discount}</FormErrorMessage>
                                <FormHelperText>Enter 0 to 100 discount</FormHelperText>
                            </FormControl>
                            <FormControl isInvalid={Formik.touched.description && Formik.errors.description}>
                                <Textarea cols={30} rows={10} placeholder='Description' {...Formik.getFieldProps('description')} />
                                <FormErrorMessage fontStyle={'italic'}>{Formik.errors.description}</FormErrorMessage>
                            </FormControl>
                        </VStack>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} type='submit'>
                            Create
                        </Button>
                        <Button onClick={onClose} variant='ghost'>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
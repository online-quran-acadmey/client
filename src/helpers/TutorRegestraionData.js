import { BiBookAlt, BiMailSend } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { GrMapLocation } from "react-icons/gr";
import { AiFillPhone, AiOutlineIdcard } from "react-icons/ai";

export const tutorRegistrationData = [
    {
        type: "text",
        name: "firstName",
        placeholder: "First Name",
        leftIcon: CiUser,
    },
    {
        type: "text",
        name: "middleName",
        placeholder: "Middle Name",
        leftIcon: CiUser,
    },
    {
        type: "text",
        name: "lastName",
        placeholder: "Last Name",
        leftIcon: CiUser,
    },
    {
        type: "email",
        name: "email",
        placeholder: "Email",
        leftIcon: BiMailSend,
    },
    {
        type: "text",
        name: "address",
        placeholder: "Address",
        leftIcon: GrMapLocation,
    },
    {
        type: "tel",
        name: "phoneNumber",
        placeholder: "Phone Number",
        leftIcon: AiFillPhone,
    },
    {
        type: "text",
        name: "idCard",
        placeholder: "ID Card Number",
        leftIcon: AiOutlineIdcard,
    },
    {
        type: "text",
        name: "specialization",
        placeholder: "Specialization",
        leftIcon: BiBookAlt,
    },
];

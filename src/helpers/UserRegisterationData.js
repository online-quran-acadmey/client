import { BiMailSend } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { GrMapLocation } from "react-icons/gr";
import { AiFillPhone } from "react-icons/ai";

export const userRegistrationData = [
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
    name: "contactNumber",
    placeholder: "Phone Number",
    leftIcon: AiFillPhone,
  },
  {
    type: "text",
    name: "parentGuardianName",
    placeholder: "Parents or Guardian Name",
    leftIcon: CiUser,
  },
  {
    type: "tel",
    name: "parentGuardianContact",
    placeholder: "Parents or Guardian Phone Number",
    leftIcon: AiFillPhone,
  },
];

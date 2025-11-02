import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";

export interface personalDataType {
  label: string;
  value: string;
  icon: React.ReactNode;
}

export const personalData: personalDataType[] = [
  {
    value: "swornim424@gmail.com",
    label: "email",
    icon: <MdOutlineEmail size="1.5em" />,
  },
  {
    label: "phone",
    value: "+49 17671095211",
    icon: <IoIosPhonePortrait size="1.5em" />,
  },
  {
    label: "location",
    value: "Kathmandu, Nepal",
    icon: <MdOutlineLocationOn size="1.5em" />,
  },
];

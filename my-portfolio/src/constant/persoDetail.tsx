import { IoIosPhonePortrait } from "react-icons/io";
import {MdOutlineEmail, MdOutlineLocationOn} from "react-icons/md"

export interface personalDataType{
    label:string;
    value:string;
    icon:React.ReactNode
}

export const personalData:personalDataType[] = [
    {
        value: 'swormim424@.com',
        label: 'email',
        icon: <MdOutlineEmail/>
    },
    {
        label:'phone',
        value:'+977-986133405',
        icon: <IoIosPhonePortrait/>
    },
    {
        label:'location',
        value:'Kathmandu,Nepal',
        icon: <MdOutlineLocationOn/>
    }
]
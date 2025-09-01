import { FaCode, FaServer } from "react-icons/fa";
import { MdAppRegistration, MdDesignServices } from "react-icons/md";

export interface WhatIAmDoing {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const whatIDo: WhatIAmDoing[] = [
  {
    title: "Web Development",
    description: "High-quality development of sites at the professional level.",
    icon: <FaCode size={40} />,
  },
  {
    title: "Mobile Apps",
    description:
      "Professional development of applications for Android and ios.",
    icon: <MdAppRegistration size={40} />,
  },
  {
    title: "UI/UX",
    description:
      "The most modern and high-quality design made at a professional level.",
    icon: <MdDesignServices size={40} />,
  },
  {
    title: "Backend Development",
    description:
      "High-performance backend services designed for scalability and seamless user experience.",
    icon: <FaServer size={40} />,
  },
];

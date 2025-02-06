import {
  AiFillMail,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlinePhone,
} from "svelte-icons-pack/ai";

export const personalInfo = {
  name: "Javeed Basha",
  position: "Web Enthusiast",
  email: "javeedbasha656@gmail.com",
  github: "https://github.com/javeedbasha656",
  linkedin: "https://www.linkedin.com/in/javeed-basha-905818b9/",
  phone: "+91-9790738760",
};

export const technologiesList = [
  "Micro-Frontend",
  "Svelte",
  "NodeJs",
  "NextJs",
  "ReactJs",
  "TypeScript",
  "JavaScript",
  "TailwindCSS",
];

export const contactList = [
  {
    id: "email",
    label: "Email",
    value: personalInfo.email,
    icon: AiFillMail,
    href: `mailto:${personalInfo.email}`,
    color: "from-cyan-400 to-blue-500",
  },
  {
    id: "github",
    label: "GitHub",
    value: personalInfo.github,
    icon: AiFillGithub,
    href: personalInfo.github,
    color: "from-purple-400 to-pink-500",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: personalInfo.linkedin,
    icon: AiFillLinkedin,
    href: personalInfo.linkedin,
    color: "from-blue-400 to-indigo-500",
  },
  {
    id: "phone",
    label: "Phone",
    value: personalInfo.phone || "+1 (555) 123-4567",
    icon: AiOutlinePhone,
    href: `tel:${personalInfo.phone}`,
    color: "from-green-400 to-emerald-500",
  },
];

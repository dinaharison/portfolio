import {
  Blocks,
  UserRoundCog,
  BriefcaseBusiness,
  GraduationCap,
  Phone,
  Home,
} from "lucide-react";
import HeroSection from "../sections/HeroSection";
import ProjectSection from "../sections/ProjectSection";
import SkillSection from "../sections/SkillSection";
import ContactSection from "../sections/ContactSection";
import EducationSection from "../sections/EducationSection";
import ExperienceSection from "../sections/ExperienceSection";

export const navbarLinks = [
  {
    name: "Home",
    path: "/hero",
    icon: Home,
    component: HeroSection,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: Blocks,
    component: ProjectSection,
  },
  {
    name: "Skills",
    path: "/skills",
    icon: UserRoundCog,
    component: SkillSection,
  },
  {
    name: "Experiences",
    path: "/experiences",
    icon: BriefcaseBusiness,
    component: ExperienceSection,
  },
  {
    name: "Education",
    path: "/education",
    icon: GraduationCap,
    component: EducationSection,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: Phone,
    component: ContactSection,
  },
];

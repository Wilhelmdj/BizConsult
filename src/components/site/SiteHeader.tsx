import { BookOpen, BriefcaseBusiness, Home, Phone, Users } from "lucide-react";
import { Logo } from "./Logo";
import { ScrollNavigationMenu } from "@/components/ui/scroll-navigation-menu";

const nav = [
  { id: 1, title: "Home", url: "/", icon: Home },
  { id: 2, title: "About Us", url: "/about", icon: Users },
  { id: 3, title: "Solutions", url: "/solutions", icon: BriefcaseBusiness },
  { id: 4, title: "Knowledge Share", url: "/knowledge-share", icon: BookOpen },
  { id: 5, title: "Contact Us", url: "/contact", icon: Phone },
] as const;

export function SiteHeader() {
  return <ScrollNavigationMenu menuItems={[...nav]} logo={<Logo compact />} />;
}

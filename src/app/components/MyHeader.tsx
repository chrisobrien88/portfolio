import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import GithubIcon from "@/app/icons/GithubIcon";
import LinkedinIcon from "@/app/icons/LinkedinIcon";
import MyCvIcon from "@/app/icons/MyCvIcon";

import MyLogo from "./MyLogo";

export const MyHeader = () => {
  return (
    <Navbar maxWidth={`2xl`} className="bg-inherit">
      <NavbarBrand>
        {/* <MyLogo /> */}
        <p className="font-bold text-gray-600 ml-2">Christopher O&apos;Brien</p>
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center"
      ></NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex">
          <Link
            isBlock
            href="chris-obrien-cv.pdf"
            target="_blank"
            className="text-gray-600 underline"
          >
            <MyCvIcon fill="gray" className="mr-2" />
            Resume
          </Link>
        </NavbarItem>
        <NavbarItem className="flex">
          <Link
            isBlock
            href="https://www.linkedin.com/in/chris-o-brien-314791212/"
            target="_blank"
            className="text-gray-600 underline"
          >
            <LinkedinIcon fill="gray" className="mr-2" />
            Linkedin
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Link
            isBlock
            href="https://github.com/chrisobrien88"
            target="_blank"
            className="text-gray-600 underline"
          >
            <GithubIcon fill="gray" className="mr-2" />
            Github
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

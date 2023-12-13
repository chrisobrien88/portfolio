import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from '@nextui-org/react'
import GithubIcon from '../icons/GithubIcon'
import LinkedinIcon from '../icons/LinkedinIcon'
import MyLogo from './MyLogo'

export const MyHeader = () => {
  return (
    <Navbar maxWidth={`2xl`} className='bg-inherit'>
      <NavbarBrand>
        <MyLogo />
        <p className="font-bold text-gray ml-2">Chris O&#39;Brien&#39;s Portfolio</p>
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center"
      ></NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex">
          <Link isBlock href="https://www.linkedin.com/in/chris-o-brien-314791212/" target="_blank" className='text-gray-500'>
            <LinkedinIcon fill="gray" className="mr-2" />
            Linkedin
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Link isBlock href="https://github.com/chrisobrien88" target="_blank" className='text-gray-500'>
            <GithubIcon fill="gray" className="mr-2" />
            Github
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
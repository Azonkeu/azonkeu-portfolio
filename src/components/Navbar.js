import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import styled from 'styled-components';

const Navbar = () => {
  const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;
  return (
    <header className="md:sticky top-0 z-10" style={{ backgroundColor: "#0a192f", maxWidth: '100%' }}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a  href="#about" className="flex title-font font-medium text-white mb-4 md:mb-0">
          <DiCssdeck size="2rem" /> 
		  <p className="ml-1 text-xl">
           Azonkeu Ornela
          </p>
        </a>
        <nav className="md:mr-auto md:ml-5 md:py-1 md:pl-5 md:border-l text-white md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 md:ml-5 hover:text-white">
            Projects
          </a>
          <a href="#skills" className="mr-5 md:ml-5 hover:text-green">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 md:ml-5 hover:text-white">
            Testimonials
          </a>
        </nav>
		<div className="inline-flex">
          <SocialIcons href="https://github.com/Azonkeu">
            <AiFillGithub size="1.8rem" color="white" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/azonkeu-ornela-software-developer/">
            <AiFillLinkedin size="1.8rem" color="white"/>
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/ornela9238/">
            <AiFillInstagram size="1.8rem" color="white"/>
          </SocialIcons>
		</div>
        <a
          href="#contact"
          className="inline-flex items-center md:ml-5 bg-gray-800 border-0 py-1 px-3 text-white focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Hire me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}

export default Navbar;
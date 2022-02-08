import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';
import { SectionTitle } from './GlobalComponents';

const Projects = () => {
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

  const Divider = styled.div`
  width: 80px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: linear-gradient(270deg, #F46737 0%, #945DD6 100%);
  margin: 0.5rem auto 1.5rem auto;
`;
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font" style={{ backgroundColor: "#0a192f", maxWidth: '100%' }}>
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
            <SectionTitle style={{ marginLeft: 'auto', marginRight: 'auto'}}>
              Some Apps I've Built
            </SectionTitle>
          <Divider />
        </div>
        <div className="lg:grid-cols-2 md:grid-cols-2 lg:w-full md:w-full grid grid-cols-1 justify-center">
          {projects.map((project) => (
            <div 
              key={project.image}
              className="lg:w-full md:w-full sm:w-1/2 w-100 p-4"
            >
              <div className="lg:w-full px-5 py-8 w-full border-4 border-gray-800 bg-gray-900 mx-auto mr-auto" style={{ }}>
                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  {project.subtitle}
                </h2>
                <img
                  alt="gallery"
                  className=""
                  src={project.image}
                  style={{ maxHeight: '17rem'}}
                />
                <h1
                  className="title-font text-lg font-medium text-white mb-3"
                  style={{
                    marginTop: "2%",
                    fontSize: '1.3em'
                  }}
                >
                  {project.title}
                </h1>
                <p className="leading-relaxed">{project.description}</p>
                <h3 style={{ marginTop: '1.5rem', color: 'yellow', fontSize: '1.2em', fontWeight: 'bold', marginBottom: '2%' }}>Stack</h3>
                <div>{project.tags.map((t) => (
                  <button key={t} style={{ marginLeft: '2%', marginRight: '4%', marginTop: '3%', marginBottom: '2%', backgroundColor: 'transparent', color: 'white', fontWeight: '500', padding: '2%', outline: '1px solid white'}}>{t}</button>
                ))}
                <div style={{ marginTop: '7%', width: '100%', display: 'flex'}}>
                  <a href={project.visit} style={{ marginLeft: '2%', width: '20%', marginRight: '2%', color: 'white', padding: '1%', textDecoration: 'underline', alignSelf:'self-end'}}>Live</a>
                  <SocialIcons href={project.source}  style={{ marginLeft: 'auto', marginRight: '0'}}>
                    <AiFillGithub size="1.7rem" />
                  </SocialIcons>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
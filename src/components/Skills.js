import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import {
  DiFirebase,
  DiReact,
  DiZend,
} from 'react-icons/di';
import { skills, backend, tools } from "../data";
import { SectionTitle } from './GlobalComponents';
import styled from 'styled-components';

const Skills = () => {
  const Divider = styled.div`
  width: 80px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: linear-gradient(270deg, #F46737 0%, #945DD6 100%);
  margin: 0.5rem auto 1.5rem auto;
`;
  return (
    <section id="skills" style={{ backgroundColor: "#0a192f", maxWidth: '100%' }}>
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20" style={{ marginTop: '7%'}}>
          <ChipIcon className="w-10 inline-block mb-4" style={{ color: "purple" }} />
          <SectionTitle style={{ marginLeft: 'auto', marginRight: 'auto'}}>
              Skills &amp; Technologies
          </SectionTitle>
          <Divider />
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto" style={{color: '#45b09f', fontSize: '1.1em', fontWeight: '500', fontFamily: 'sans-serif'}}>
            I&apos;ve worked with a range a technologies in the web development world.
            From Back-end To Design
          </p>
        </div>

        <div id="ski" className="lg:flex-row md:flex-row lg:mt-0 md:mt-0 flex flex-col mt-8" style={{ display: 'flex', maxWidth: '100%'}}>
          <div className="lg:w-2/5 md:w-2/5 w-full" style={{display: 'flex', flexDirection: 'column'}}>
            <DiReact size="3rem" color="white" style={{alignSelf: 'center'}}/>
            <h3 style={{alignSelf: 'center', color: 'white'}}>Front-End</h3>
            {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full" style={{alignSelf: 'center'}}>
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:w-2/5 md:w-2/5 w-full lg:mt-0 md:mt-0 flex flex-col mt-8" style={{display: 'flex', flexDirection: 'column'}}>
          <DiFirebase size="3rem" color="white" style={{alignSelf: 'center'}}/>
          <h3 style={{alignSelf: 'center', color: 'white'}}>Back-End</h3>
          {backend.map((skill) => (
          <div key={skill} className="p-2 sm:w-1/2 w-full" style={{alignSelf: 'center'}}>
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">
                {skill}
              </span>
            </div>
          </div>
          ))}
        </div>
        <div className="lg:w-2/5 md:w-2/5 w-full lg:mt-0 md:mt-0 flex flex-col mt-8" style={{display: 'flex', flexDirection: 'column'}}>
          <DiZend size="3rem" color="white" style={{alignSelf: 'center'}}/>
          <h3 style={{alignSelf: 'center', color: 'white'}}>Tools & Methods</h3>
          {tools.map((skill) => (
          <div key={skill} className="p-2 sm:w-1/2 w-full" style={{alignSelf: 'center'}}>
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">
                {skill}
              </span>
            </div>
          </div>
          ))}
        </div>
      </div>
        
      </div>
    </section>
  );
}

export default Skills;
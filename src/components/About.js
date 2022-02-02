import React from "react";
import BackgroundAnimation from './Animation';
import { SectionTitle } from './GlobalComponents';

const About = () => {
  return (
    <section id="about" style={{ backgroundColor: "#0a192f" }}>
      <div className="container mx-auto flex px-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-0 md:mb-0 items-center text-center">
           <SectionTitle style={{ marginLeft: '0', marginRight: 'auto', fontSize: '3em'}}>
             Welcome To
            <br />
            My Personal Portfolio
          </SectionTitle>
          
          <p className="mb-8 leading-relaxed" style={{color: '#45b09f', fontSize: '1.1em', fontWeight: '500', fontFamily: 'sans-serif'}}>
             I&apos;m a software engineer specializing in building and
          designing exceptional digital experiences. My interests include software design and development, artificial intelligence, machine learning, computer vision, and natural language processing.
          </p>
          <div className="flex justify-center text-white">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white-600 bg-purple-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Check out my projects
            </a>
          </div>
          
        </div>
      
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <BackgroundAnimation />
        </div>
      </div>
    </section>
  );
}

export default About;
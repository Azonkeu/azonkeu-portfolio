import React from "react";
import BackgroundAnimation from './Animation';
import { SectionTitle } from './GlobalComponents';
import styled from 'styled-components';

const Aboutme = () => {
  const Divider = styled.div`
  width: 80px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: linear-gradient(270deg, #F46737 0%, #945DD6 100%);
  margin: 0.5rem 0 1.5rem 0;
`;
  return (
    <section id="about" style={{ backgroundColor: "#0a192f", maxWidth: '100%'}}>
      <div className="container mx-auto flex px-10 md:flex-row flex-col-reverse items-center">
         <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6" style={{ marginTop: '10%'}}>
          <BackgroundAnimation />
        </div>
		<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-0 md:mb-0 items-center text-center" style={{ marginTop: '7%', marginLeft: '3%'}}>
           <SectionTitle style={{ marginLeft: '0', marginRight: 'auto'}}>About Me</SectionTitle>
		   <Divider style={{ marginLeft: '0', marginRight: 'auto'}}/>
          <p className="mb-8 leading-relaxed" style={{color: '#45b09f', fontSize: '1.1em', fontWeight: '500', fontFamily: 'sans-serif'}}>
			  Hi! I&apos;m Ornela. Nice to meet you. I'm a Full-stack Web developer who specializes in using  HTML, CSS, JavaScript, React, Redux, Ruby, Rails, etc... to build software solutions for big, middle, and small  businesses. Along with that, I build custom web applications from scratch. Before I started working as a developer, I was an online English and French teacher for more than 2 years. I spent every day working with  people from different cultures and backgrounds in a stressful and fast-paced environment. That helped me become a pro at creating and maintaining a friendly work environment in order to succeed in the dev world. I've spent the last 4 years working remotely and asynchronously with people from different countries.
		  </p>
		  <p className="mb-8 leading-relaxed" style={{color: '#45b09f', fontSize: '1.1em', fontWeight: '500', fontFamily: 'sans-serif'}}>
		     I&apos;ve had the privilege of working at an advertising agency, a start-up, and a huge corporation. Additionally, I had the opportunity to mentor a lot of students. 
		  </p> 
      </div>
	  </div>
    </section>
  );
}

export default Aboutme;
import React from "react";
import styled from 'styled-components';
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";
import { SectionTitle } from './GlobalComponents';

const Testimonials = () => {
  const Divider = styled.div`
  width: 80px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: linear-gradient(270deg, #F46737 0%, #945DD6 100%);
  margin: 0.5rem auto 1.8rem auto;
`;
  return (
    <section id="testimonials" style={{ backgroundColor: "#0a192f" }}>
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" style={{ color: "#fff", marginTop: '4%' }} />
        <SectionTitle style={{ marginLeft: 'auto', marginRight: 'auto'}}>Client Testimonials</SectionTitle>
        <Divider />
        <div className="flex flex-wrap m-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded" style={{ backgroundColor: "#ddefaa" }}>
                <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6" style={{ color: "#0a192f" }}>{testimonial.quote}</p>
                <div className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium" style={{ color: "#0a192f" }}>
                      {testimonial.name}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {testimonial.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
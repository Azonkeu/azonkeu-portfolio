import React, { useState, useRef, useEffect } from 'react';
import { TimeLineData } from '../data';
import styled from 'styled-components';
import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from './TimelineStyle';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from './GlobalComponents';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => node.scrollTo({ left, behavior: 'smooth' });
  const handleClick = (e, i) => {
    e.preventDefault();
    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth
        * 0.7 * (i / TimeLineData.length));
      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft
      / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);
      setActiveItem(index);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener('resize', handleResize);
  }, []);

   const Divider = styled.div`
  width: 80px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: linear-gradient(270deg, #F46737 0%, #945DD6 100%);
  margin: 0.4rem auto 6rem auto;
`;
  return (
	<div style={{ backgroundColor: "#0a192f", padding: '4%', maxWidth: '100%'}}>
	  <SectionTitle style={{ marginLeft: 'auto', marginRight: 'auto', paddingTop: '6%'}}>Experience</SectionTitle>
	 <Divider />
	 <Section id="about">
    <CarouselContainer ref={carouselRef} onScroll={handleScroll} className="lg:flex-row md:flex-row flex flex-col text-white text-center w-full items-center">
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode
              key={item.id}
              final={index === TOTAL_CAROUSEL_COUNT - 1}
            >
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}
				className="mt-4 w-full mr-0"
              >
                <CarouselItemTitle>
                  {`${item.year}`}
                  <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fillOpacity="0.33"
                    />
                    <defs >
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" />
                        <stop
                          offset="0.79478"
                          stopColor="white"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton
            key={item.id}
            index={index}
            active={activeItem}
            onClick={(e) => handleClick(e, index)}
            type="button"
          >
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
        ))}
        
      </CarouselButtons>
	  <SectionDivider />
    </Section>
  </div>
  );
};

export default Timeline;
import styled from 'styled-components';

export const CarouselContainer = styled.ul`
  width: 100%;
  background: #0a192f;
  padding: 0rem;
  list-style:none;
  display: flex;
  flex-dirction: 'row';
  justify-content: space-between; 
  margin-left: 4%;
  &:first-of-type{
    margin-left: 0px;
  }
  margin-bottom: 5%;
  //remove scrollbar
  scrollbar-width: none;  
   &::-webkit-scrollbar {
     display: none;
   }
  @media only screen (max-width: 600px)(min-width: 320px){
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 8px;
  }
`;

export const CarouselMobileScrollNode = styled.div`
   @media only screen (max-width: 600px)(min-width: 320px){
    display: flex;
    width: 100%;
  }
`;

export const CarouselItem = styled.div`
  background: #0a192f;
  border-radius: 3px;
  max-width: 196px;
  @media only screen (max-width: 600px)(min-width: 320px){
    margin-left: 32px;
    min-width: 120px;
    background: #0E131F;
    padding: 4px;
    align-content: start;
    scroll-snap-align: start;
    border-radius: 3px;
    overflow: visible;
    position: relative;
    height: fit-content;
  }
`;

export const CarouselItemTitle = styled.h4`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  /* This gradient is different due to the size of the Title container, it must transition sooner to be visible on the text */
  background: linear-gradient(121.57deg, #FFFFFF 10%, rgba(255, 255, 255, 0.66) 30.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
   @media only screen (max-width: 600px)(min-width: 320px){
    font-size: 1.1em;
    line-height: 28px;
    margin-bottom: 4px;
  }  
`;

export const CarouselItemImg = styled.svg`
  margin-left: 21px;
  -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0));
  width: 100%;
  @media only screen (max-width: 600px)(min-width: 320px){
    -webkit-mask-image: none;
    margin-left: 16px;
    overflow: visible;
  }
`;

export const CarouselItemText = styled.p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);
  padding-right: 16px;
   @media only screen (max-width: 600px)(min-width: 320px){
    font-size: 0.7em;
    line-height: 18px;
    padding-right: 4%;
  }
`;

export const CarouselButtons = styled.div`
  width: 288px;
  display: none;
  visibility: hidden;
   @media only screen (max-width: 600px)(min-width: 320px){
    display: flex;
    visibility: visible;
    margin-bottom: 5%;
  }
`;

export const CarouselButton = styled.button`
  box-sizing: border-box;
  background: none;
  padding: 4px;
  border: none;
  cursor: pointer;
  margin-right: 4px;
  opacity: 1;
  transform: scale(1.6);
  &:focus {
    outline: none;
  }
`;

export const CarouselButtonDot = styled.div`
  background-color: white;
  border-radius: 10px;
  margin: auto;
  width: 3px;
  height: 3px;
`;
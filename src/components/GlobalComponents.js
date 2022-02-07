import styled from 'styled-components';

export const SectionTitle = styled.h2 `
  font-weight: 3.5em;
  font-size: 2.6em;
  line-height: 72px;
  width: max-content;
  max-width: 100%;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: 6% 0 3%';
   @media screen and (max-width: 600px) and (min-width: 320px){
    font-size: 32px;
    line-height: 40px;
    font-size: 1.3em;
    line-height: 2em;
    margin-bottom: 8px;
    padding: 4% 0 2%;
    max-width: 100%;
  }
`;

export const Section = styled.div `
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 4% auto 4% auto;
  width: 100%;
  box-sizing: content-box;
  overflow: hidden;
  @media screen and (max-width: 600px) and (min-width: 320px) {
    padding: 24px 48px 0;
    flex-direction: column;
  }
`;

export const SectionDivider = styled.div`
  width: 5%;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: linear-gradient(270deg, #F46737 0%, #945DD6 100%)'
  @media screen and (max-width: 600px) and (min-width: 320px) {
    width: 20%;
    height: 4px;
  }
`;


export const SectionText = styled.p`
  max-width: 90%;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.5);
  @media screen and (max-width: 600px) and (min-width: 320px){
    font-size: 1.1em;
    line-height: 24px;
    padding-bottom: 2%;
  }
`;

export const SectionSubText = styled.p`
  max-width: 90%;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
   @media screen and (max-width: 600px) and (min-width: 320px){
    font-size: 1.1em;
    line-height: 22px;
  }
`;

export const SecondaryBtn = styled.button`
  color: #FFF;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.33);
  box-sizing: border-box;
  border-radius: 999px;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  width: fit-content;
  margin-top: 32px;
  margin-bottom: 80px;
  cursor: pointer;
  transition: 0.4s ease;
  &:focus {
    outline: none;
  }
  &:hover {
    color: #0f1624;
    background: #fff;
    border: 1px solid #fff;
  }
  &:active {
    background: #e0e4eb;
    border: 1px solid #304169;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }
   @media screen and (max-width: 600px)and (min-width: 320px){
    margin-top: 16px;
    margin-bottom: 40px;
    padding: 8px 16px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
  }
`;

export const ButtonBack = styled.div`
  width: 40%
  height: 25rem;
  border-radius: 50px;
  font-size: 1.1em
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  color: #fff;
  background: linear-gradient(270deg, #ff622e 0%, #B133FF 100%);
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;
  opacity: .5;
 @media screen and (max-width: 600px)and (min-width: 320px){
    width: 100%;
    height: 32px;
    font-size: 14px;
    margin-bottom: 0;
  }
`;

export const ButtonFront = styled.button`
  border: none;
  border-radius: 50px;
  color: #fff;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(270deg, #F46737 0%, #945DD6 100%);
  opacity: .5
  transition: .4s ease;
  font-size: 1.2em
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  &:hover {
    opacity: 0;
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }
  &:disabled{
    background: linear-gradient(270deg, #00DBD8 0%, #B133FF 100%);
    opacity: 0.5;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }
   @media screen and (max-width: 600px) and (min-width: 320px){
    font-size: 1.1em;
  }
`;

export const LinkContainer = styled.div`
  margin-left: 5%;
  transition: 0.3s ease;
  justify-content: center;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
  }
 @media screen and (max-width: 600px) and (min-width: 320px){
    margin-left: 4%;
  }
`;

export const LinkIconImg = styled.div`
  display: flex;  
  height:  10rem;
  @media screen and (max-width: 600px) and (min-width: 320px){
    height: 8rem ;
  }
`;
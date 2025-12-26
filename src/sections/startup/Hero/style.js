import styled from "styled-components";
import { Box, Heading, Button, Paragraph, Image } from "~styled";

const Hero = styled(Box)`
  padding-top: 96px;
  padding-bottom: 64px;
  background-size: cover;
  background-position: right top;
  position: relative;
  z-index: 2;
  @media (min-width: 768px) {
    padding-top: 128px;
    padding-bottom: 96px;
  }

`;

Hero.Content = styled(Box)``;
Hero.Subtitle = styled(Heading)`
  font-size: 21px;
  font-weight: 500;
  font-style: italic;
  letter-spacing: normal;
  line-height: 1.4285;
  margin-bottom: 20px;
`;
Hero.Title = styled(Heading)`
  font-size: 35px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.2;
  margin-bottom: 25px;

  @media (min-width: 480px) {
    font-size: 40px;
  }

  @media (min-width: 768px) {
    font-size: 50px;
  }

  @media (min-width: 992px) {
    font-size: 48px;
    font-weight: 700;
    line-height: 1.1;
  }
`;
Hero.Text = styled(Paragraph)`
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.1;
  margin-bottom: 32px;
  color: #4a5565;
  max-width: 36rem;

`;

Hero.Buttons = styled(Box)`
   display:flex;
   gap:16px;
   margin-bottom:32px !important;
   
  .btn {
    margin-right: 18px;
  }
`;
Hero.Video = styled(Box)`
  box-shadow: 0 10px 56px rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  @media (min-width: 992px) {
    margin-left: 30px;
  }

  @media (min-width: 1600px) {
    margin-left: 67px !important;
  }

  .video-btn {
    min-width: 60px;
    max-width: 60px;
    min-height: 60px;
    max-height: 60px;
    background-color: #5034fc;
    border-color: #5034fc;
    color: #fff;
    box-shadow: 0 0 0 0.2rem rgb(106 82 252 / 50%);
    outline: none;
    border-radius: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 0;
  }
`;
Hero.Button = styled(Button)`
  min-width: 130px;
  height: 50px;
  font-size: 14px;
  transition: 0.4s;
  border-radius: 14px;
  &.btn-2 {
  color:#2b9fe8;
  border-radius: 14px;
  border: 2px solid #2b9fe8;
  &:hover {
  background-color: #2b9fe8;
  color:#fff;
  }
  }
  &.btn-1 {
cursor:pointer;
padding: 16px 32px 16px 32px;
background-color:#ff6b6b;
color:white;
width: fit-content;
border-radius:14px;
opacity: 1;
transition: background-color 0.3s ease, box-shadow 0.3s ease;
box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 
              0 4px 6px -4px rgba(0,0,0,0.1); 
&:hover{
 background-color: #FF5252;
  box-shadow: 0 12px 20px rgba(0,0,0,0.15);
}
  }
  @media (min-width: 576px) {
    min-width: 180px;
    height: 56px;
    font-size: 15px;
  }
`;

Hero.Image = styled.img`
height: 700px;
  width: 100%;
  animation: floatUpDown 3.5s ease-in-out infinite;
  
  @keyframes floatUpDown {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-18px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

Hero.Footer = styled(Paragraph)`
display:flex;
flex-wrap: wrap;
gap: 24px;
padding-top: 16px;
color: #364153;
font-size:14px;
line-height:1.4;

`

export default Hero;

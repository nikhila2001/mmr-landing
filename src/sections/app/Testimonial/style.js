// import styled from 'styled-components';
// import { Box, Heading,Button,Paragraph } from '~styled';

// const Testimonial = styled(Box)`
//     padding-top: 50px;
//     padding-bottom: 40px;

//     @media (min-width:575px) {
//         padding-top: 55px;
//         padding-bottom: 60px;
//     }
//     @media (min-width:768px) {
//         padding-top: 75px;
//         padding-bottom: 80px;
//     }

//     @media (min-width:992px) {
//         padding-top: 130px;
//         padding-bottom: 130px;
//     }
//     .testimonial-slider{
//         @media (min-width: 768px) {
//             width: 140%;
//         }
//         .slick-slide{
//             margin-right: 30px;
//         }
//         .slick-track{
//             display:flex;
//         }
//     }
// `
// Testimonial.Title = styled(Heading)`
//     font-size: 32px;
//     font-weight: 500;
//     letter-spacing: normal;
//     line-height: 1.3;
//     position:relative;
//     @media (min-width:768px) {
//       font-size: 38px;
//     }

//     @media (min-width:992px) {
//       font-size: 48px;
//     }
// `
// Testimonial.Subtitle = styled(Heading)`
//     font-size: 18px;
//     font-weight: 500;
//     letter-spacing: normal;
//     line-height: 1.75;
     
// `
// Testimonial.Text = styled(Paragraph)`
//     font-size: 16px;
//     font-weight: 400;
//     letter-spacing: normal;
//     line-height: 1.77777;
//     @media (min-width:768px) {
//         font-size: 18px;
//     }
// `
// Testimonial.Button = styled(Button)`
// color:#fff;
//     border-color: #fd346e;
//     background-color: #fd346e;
//     box-shadow:0 20px 20px rgb(253 52 110 / 30%);
//     border-radius:500px;
//     &:hover{
//         box-shadow:0 20px 20px rgb(253 52 110 / 0%);
//         color:#fff;

//     }
// `

// Testimonial.ContentTextBlock = styled(Box)`
//     position:relative;
// `
// Testimonial.Image = styled(Box)`
// position:relative;
// .video-btn{
//         min-width: 96px;
//         max-width: 96px;
//         min-height: 96px;
//         max-height: 96px;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         font-size: 16px;
//         color: #fff;
//         position: absolute;
//         top: 50%;
//         left: 50%;
//         transform: translate(-50%, -50%);
//         border-radius: 50%;
//         color:#fd346e;
//         border:0;
//         box-shadow:none;
//         &:after{
//             position: absolute;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: 100%;
//             border-radius: 50%;
//             content: "";
//             background-color: #fff;
//             z-index: -1;
//             pointer-events: none;
//             opacity: 0;
//             animation:sonarWave 2s linear infinite;
//         }
        
// }

// `;
// Testimonial.SliderButton = styled(Box)`
//     /* margin-top:40px; */
//   display:inline-flex;
//   justify-content:flex-start;
//   margin-bottom:40px;  
//   @media (min-width:992px) {
//     margin-top: 40px !important;
//     justify-content:flex-end;
//   }
//   button {
//     background-color: transparent;
//     border: none;
//     min-width: 50px;
//     max-width: 50px;
//     min-height: 50px;
//     max-height: 50px;
//     color: #099a97;
//     border-radius: 500px;
//     background-color: #fff;
//     margin: 0 10px;
//     transition: 0.4s;
//     &:hover {
//       box-shadow: 0 4px 4px #067775;
//       background-color: #099a97;
//       color: #fff;
//     }
    
//     &:focus{
//         box-shadow:none;
//     }
//   }
// `

// Testimonial.Button = styled(Button)`

// `
// Testimonial.Box = styled(Box)`

// `


// export default Testimonial;

import styled from "styled-components";
import { Box, Heading, Button, Paragraph } from "~styled";

/* Root section */
const Testimonial = styled(Box)`
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "#f3f4f6"};
  padding-top: 60px;
  padding-bottom: 60px;

  @media (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  @media (min-width: 992px) {
    padding-top: 120px;
    padding-bottom: 120px;
  }
`;

/* Heading */
Testimonial.Title = styled(Heading)`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: normal;
  line-height: 1.3;
  color: #111827;
  margin-bottom: 0;
  text-align: center;

  span {
    color: #0284ff; /* blue "Healthcare Professionals" */
  }

  @media (min-width: 768px) {
    font-size: 38px;
  }

  @media (min-width: 992px) {
    font-size: 46px;
  }
`;

/* Subtitle */
Testimonial.Subtitle = styled(Heading)`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;
  color: #6b7280;
  margin-top: 10px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

/* Body text (if needed inside card) */
Testimonial.Text = styled(Paragraph)`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.8;
  color: #4b5563;

  @media (min-width: 768px) {
    font-size: 17px;
  }
`;

/* Wrapper around Slider so we can position arrows */
Testimonial.SliderWrapper = styled(Box)`
  position: relative;
  margin-top: 30px;
  width:100%;

  @media (min-width: 992px) {
    margin-top: 45px;
  }

  .testimonial-slider {
    @media (min-width: 768px) {
      width: 100%; /* stretch cards a bit like the screenshot */
    //   margin-left: -20%;
    }

    .slick-track {
      display: flex;
    }

    .slick-slide {
      padding: 0 12px;
      height: auto;
    }
  }
`;

/* White card around each testimonial */
Testimonial.Card = styled(Box)`
  background-color: #ffffff;
  border-radius: 24px;
  padding: 24px 26px;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
  height: 100%;
  display: flex;
  align-items: stretch;
`;

/* Arrow buttons (round, side-center like in design) */
Testimonial.SliderButton = styled(Box)`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  pointer-events: none; /* let clicks pass through except on buttons */

  button {
    pointer-events: auto;
    border: none;
    outline: none;
    min-width: 48px;
    max-width: 48px;
    min-height: 48px;
    max-height: 48px;
    border-radius: 999px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0f9bd7;
    font-size: 16px;
    box-shadow: 0 14px 30px rgba(37, 99, 235, 0.25);
    transition: 0.25s ease;
    margin: 0 6px;

    &:hover {
      background-color: #0f9bd7;
      color: #ffffff;
      transform: translateY(-2px);
      box-shadow: 0 18px 40px rgba(37, 99, 235, 0.35);
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.3);
    }
  }

  @media (max-width: 575.98px) {
    /* optional: hide arrows on very small screens */
    button {
      min-width: 40px;
      max-width: 40px;
      min-height: 40px;
      max-height: 40px;
    }
  }
`;

/* Utility wrappers reused in your JSX */
Testimonial.Box = styled(Box)``;
Testimonial.Button = styled(Button)``;

export default Testimonial;

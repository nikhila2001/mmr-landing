// import styled from 'styled-components';
// import {
//     Box,
//     Heading,
//     Paragraph
// } from '~styled';

// const Process = styled(Box)
// `
//     padding-top: 50px;
//     padding-bottom: 36px;

//     @media (min-width:768px) {
//         padding-top: 70px;
//         padding-bottom: 55px;
//     }

//     @media (min-width:992px) {
//         padding-top: 110px;
//         padding-bottom: 100px;
//     }

// `
// Process.Subtitle = styled(Heading)
// `
//     color: #ff5722;
//     font-size: 16px;
//     font-weight: 500;
//     letter-spacing: normal;
//     line-height: 1.75;
     
// `
// Process.Title = styled(Heading)
// `
//     font-weight: 500;
//     letter-spacing: normal;
//     line-height: 1.2;
//     font-size: 30px;
//     color: #262729;
//     margin-bottom: 45px;

//     @media (min-width:768px) {
//         font-size: 38px;
//     }
    
//     @media (min-width:992px) {
//         font-size: 45px;
//         margin-bottom: 0;
//     }
// `
// Process.Box = styled(Box)
// ``
// Process.Widgets = styled(Box)
// `
// .single-widget {
//     &:nth-child(1) {
//         & > div {
//             &::before {
//                 opacity: 0.1;
//             }
//         }
//     }
//     &:nth-child(2) {
//         @media (min-width:992px) {
//             & > div {
//                 &::before {
//                     opacity: 0.1;
//                 }
//             }
//         }
//     }

//     &:last-child {
//         & > div {
//             &::before {
//                 opacity: 0;
//             }
//         }
//     }
// }
// `

// export default Process;

// 

import styled from "styled-components";

/* Section */
export const Section = styled.section`
  padding: 48px;
  background: linear-gradient(to bottom, white, #F5F7F9);


  @media (min-width: 768px){
     padding: 96px;
    ;
 }
`;

/* Container */
export const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 16px;

    @media (min-width: 768px){
     padding: 0 24px;
    ;
 }

  @media (min-width: 992px){
     padding: 0 32px;
 }

`;

/* Header */
export const Header = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

export const Title = styled.h2`
  font-size: 42px;
  font-weight: 700;
  color: #0f172a;
`;

export const Highlight = styled.span`
  color: #2b9fe8;
`;

export const Subtitle = styled.p`
  margin-top: 12px;
  font-size: 18px;
  color: #475569;
`;


export const StepsSection = styled.div`
  width: 100%;
  margin-top: 60px;
`;
export const TopRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CircleRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  justify-items: center;
  margin-bottom: 20px;
    gap: 20px;

`;

export const Line = styled.div`
  width: 100%;
  height: 5px;
  width: 100%;
 background: linear-gradient(to right, #2b9fe8, #6cc4f0);
`;


export const StepCircle = styled.div`
  width: 90px;
  height: 90px;
  background: linear-gradient(135deg, #2b9fe8, #6cc4f0);
  border-radius: 50%;
  color: #ffffff;
  font-size: 28px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 10px #eef6fd;
`;

/* Cards */
export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`;

export const CardIcon = styled.div`
  display: inline-flex;     
  align-items: center;      
  justify-content: center;  
  width: 56px;              /* w-14 */
  height: 56px;             /* h-14 */
  border-radius: 12px;      /* rounded-xl */
  margin-bottom: 1rem;      /* mb-4 */
  color: #2B9FE8;

  background: linear-gradient(
    to bottom right,
    rgba(43, 159, 232, 0.10),
    rgba(108, 196, 240, 0.10)
  );
`;

export const Card = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 24px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
`;

export const IconBox = styled.div`
  width: 60px;
  height: 60px;
  background: #eef6fd;
  border-radius: 16px;
  margin: 0 auto 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  color: #2b9fe8;
`;

export const CardTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  color: #1a1a2e;
  margin-bottom: 12px;
`;

export const CardText = styled.p`
  font-size: 16px;
  color: #475569;
  line-height: 1.6;
`;

export const ActionButton = styled.div`
margin: 48px auto 0 auto;
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
`

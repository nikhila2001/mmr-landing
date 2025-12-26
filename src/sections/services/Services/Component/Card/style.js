import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

import {transparentize,rgba} from "polished"
const propToColor = (arg = "#1787FC" ) => transparentize(0.70, arg);
// const Card = styled(Box).attrs({className:"service-card"})`
//     border: 1px solid white;
//     padding-top: 24px;
//     padding-left: 24px;
//     padding-right: 24px;
//     padding-bottom: 24px;
//     height:100%;
//     border-radius: 15px;
//     transition: 0.4s;
//     display:flex;
//     flex-direction:column;
//     align-items:${props => props.itemCenter ? "center" : null};
//     text-align:${props => props.itemCenter ? "center" : null};
//     color:#25373f;
//     @media (min-width:575px) {
//         padding-left: 32px;
//         padding-right: 32px;
//     }
//     @media (min-width:768px) {
//         padding-left: 32px;
//         padding-right: 32px;
//     }
//     @media (min-width:992px) {
//         padding-left: 32px;
//         padding-right: 32px;
//     }

//     &:hover{
//        box-shadow:  0 10px 30px rgba(0, 0, 0, 0.08);
//     }
    
// `

const Card = styled(Box).attrs({ className: "service-card group" })`
  position: relative;                     /* relative */
  height: 100%;                           /* h-full */
  background: rgba(255, 255, 255, 0.8);    /* bg-white/80 */
  backdrop-filter: blur(16px);            /* backdrop-blur-lg */
  border-radius: 1rem;                    /* rounded-2xl */
  
  padding: 24px;                          /* p-6 */
  border: 1px solid rgba(255, 255, 255, 1); /* border border-white */

  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1),
              0 4px 6px -4px rgba(0,0,0,0.1);  /* shadow-lg */

  transition: all 0.3s ease;              /* transition-all duration-300 */

  display: flex;
  flex-direction: column;
  align-items: ${props => (props.itemCenter ? "center" : "flex-start")};
  text-align: ${props => (props.itemCenter ? "center" : "left")};
  color: #25373f;

  /* md:p-8 */
  @media (min-width: 768px) {
    padding: 32px;
  }

  &:hover {
    background-color:#F5F7FA;
    transform: translateY(-5px); /* hover:-translate-y-1 */
    box-shadow: 
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04); /* hover:shadow-xl */
  }
`;

Card.Icon = styled(Box)`
        min-width: 60px;
        max-width: 60px;
        min-height: 60px;
        max-height: 60px;
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        font-weight: 400;
        color: #fff;
        margin-bottom: 16px;
        background: ${({ background }) => background};
        box-shadow: ${({ shadowColor }) =>
    shadowColor ? `-12px 12px 50px ${rgba(shadowColor, 0.3)}` : "none"}; 
   transition: transform 0.3s ease;
  .service-card:hover & {
    transform: scale(1.10);
  }       
`
Card.Title = styled(Heading)`
        font-size: 20px;
        font-weight: 600;
        letter-spacing: normal;
        color:#1a1a2e;
        margin-bottom:8px;

`
Card.Text = styled(Paragraph)`
        font-size: 15px;
        font-weight: 400;
        letter-spacing: normal;
        line-height: 1.5;
        opacity:.5;
        color:#4a5565;
        margin-bottom:0;
`
Card.Button = styled(Box)`
        font-size: 15px;
        font-weight: 500;
        font-style: normal;
        letter-spacing: normal;
        line-height: 26px;
        display: flex;
        align-items: center;
        color: inherit;
        transition: 0.4s;

        i {
            margin-left: 10px;
        }
`

export default Card;
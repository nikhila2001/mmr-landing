// import styled from 'styled-components';
// import { Box, Heading,Button,Paragraph } from '~styled';

// const Counter = styled(Box)`
// padding-top: 45px;
// padding-bottom: 20px;

// @media (min-width: 768px){
//     padding-top: 70px;
//     padding-bottom: 40px;
// }

// @media (min-width: 992px){
//     padding-top: 125px;
//     padding-bottom: 111px;
// }

// `
// Counter.Single=styled(Box).attrs({className:"counter-single"})`
// margin-bottom: 30px;
// flex-direction: column;

// @media (min-width: 992px){
//   margin-bottom: 0;
// }

// `
// Counter.Block = styled(Box)`

// `
// Counter.Title = styled(Heading)`
// font-size: 35px;
// font-weight: 500;
// letter-spacing: -1px;
// line-height: 1.13461;
// margin-bottom: 25px;

// @media (min-width: 76px){
//   font-size: 42px;
// }

// @media (min-width: 992px){
//   font-size: 52px;
// }

// `
// Counter.Text = styled(Paragraph)`
// font-size: 16px;
// font-weight: 400;
// letter-spacing: normal;
// line-height: 1.5;
// color:inherit;

// @media (min-width: 768px){
//   font-size: 21px;
// }

// @media (min-width: 992px){
//   font-size: 24px;
// }

// `
// Counter.Box = styled(Box)``


// export default Counter;


import styled from "styled-components";
import { Row } from "react-bootstrap";

export const ComparisonWrapper = styled.div`
  padding: 60px 0;
  background: #f3f4f6;
  display: flex;
  justify-content: center;
`;

export const TableBox = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);

  .table-row {
    border-bottom: 1px solid #e5e7eb;
    padding: 18px ;
  }

  .header-row {
    background: linear-gradient(to right, #2b9fe8, #6cc4f0);
    color: #fff;
    font-weight: 600;
    padding: 22px 0;
    border-bottom: none;
  }

`;

export const HeaderCell = styled.div`
  font-size: 17px;
  font-weight: 700;
  text-align: center;
  position: relative;
  color: #fff;
  align-self:center;
`;

export const TableRow = styled(Row)`
  background: #ffffff;                     /* bg-white */
  transition: background-color 0.3s ease;  /* transition-colors */

  &:hover {
    background: rgba(239, 246, 255, 0.5);  /* bg-blue-50/50 */
    /* Tailwind blue-50 = #eff6ff, 50% opacity */
  }
`;

export const FeatureCell = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  display: flex;
  align-items: center;
`;

export const ValueCell = styled.div`
  font-size: 15px;
  color: #374151;
  display: flex;
  gap: 6px;
  align-items: center;
`;

export const Pill = styled.span`
  display: block;
  font-size: 12px;
  padding: 3px 10px;
  margin-top: 6px;
  border-radius: 12px;
  background: #dff2ff;
  color: #0284ff;
  font-weight: 600;
  width: fit-content;
`;

export const CheckIcon = styled.span`
  color: #10b981;
  font-size: 16px;
  font-weight: bold;
  &::before {
    content: "✓";
  }
`;

export const CrossIcon = styled.span`
  color: #ef4444;
  font-size: 16px;
  font-weight: bold;
  &::before {
    content: "✕";
  }
`;

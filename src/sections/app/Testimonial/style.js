
import styled from "styled-components";
import { Box, Heading, Paragraph } from "~styled";

/* ROOT SECTION */
const Testimonial = styled(Box)`
  background: linear-gradient(to bottom, #f5f7fa, #ffffff);
  padding-top: 64px;
  padding-bottom: 64px;

  @media (min-width: 768px) {
    padding-top: 96px;
    padding-bottom: 96px;
  }

  @media (min-width: 1200px) {
    padding-top: 120px;
    padding-bottom: 120px;
  }
`;

/* TITLE */
Testimonial.Title = styled(Heading)`
  font-size: 42px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 12px;

  span {
    color: #2b9fe8;
  }
`;

/* SUBTITLE */
Testimonial.Subtitle = styled(Paragraph)`
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
  font-size: 16px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

/* SLIDER WRAPPER */
Testimonial.SliderWrapper = styled(Box)`
  position: relative;

  .slick-slide {
    padding: 12px;
  }

  .slick-track {
    display: flex;
  }
`;

/* CARD */
Testimonial.Card = styled(Box)`
  background: #ffffff;
  border-radius: 20px;
  padding: 24px;
  // box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  transition: 0.3s ease;

  &:hover {
    // box-shadow: 0 18px 40px rgba(0, 0, 0, 0.12);
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1),
              0 4px 6px -4px rgba(0,0,0,0.1);
  }
`;

/* SLIDER BUTTONS */
Testimonial.SliderButton = styled(Box)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  display: flex;
  justify-content: space-between;
  pointer-events: none;

  button {
    pointer-events: auto;
    width: 48px;
    height: 48px;
    border-radius: 999px;
    border: none;
    background: #ffffff;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
    color: #2b9fe8;
    transition: 0.3s ease;

    &:hover {
      background: #2b9fe8;
      color: #ffffff;
      transform: translateY(-2px);
      box-shadow: 0 12px 30px rgba(43, 159, 232, 0.3);
    }
  }
`;

Testimonial.Box = styled(Box)``;

export default Testimonial;

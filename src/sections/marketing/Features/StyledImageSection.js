import styled from "styled-components";

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const InnerCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 24px; /* rounded-3xl */
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15); /* shadow-2xl */
  transition: box-shadow 0.3s ease;

  ${ImageWrapper}:hover & {
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25); /* hover:shadow-xl */
  }
`;

export const MainImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
`;

export const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(43, 159, 232, 0.2),
    transparent
  );
`;

export const OuterGlow = styled.div`
  position: absolute;
  z-index: -1;
  top: 16px;
  left: -16px;
  width: 100%;
  height: 100%;
  border-radius: 24px;
  background: linear-gradient(
    to bottom right,
    rgba(108, 196, 240, 0.2),
    rgba(43, 159, 232, 0.2)
  );
`;

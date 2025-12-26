// components/phoneStyle.js
import styled from "styled-components";

export const PhoneWrapper = styled.section`
  position: relative;
  padding: 48px 0;
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

export const PhoneInner = styled.div`
  position: relative;
  max-width: 360px;
  margin: 0 auto;
`;

export const PhoneFrame = styled.div`
  position: relative;
  background: linear-gradient(135deg, #1a1a2e, #2b9fe8);
  border-radius: 3rem;
  padding: 12px;
  box-shadow: 0 25px 60px rgba(15, 39, 87, 0.35);
`;

export const PhoneShell = styled.div`
  background-color: #ffffff;
  border-radius: 2.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const PhoneStatusBar = styled.div`
  background-color: #2b9fe8;
  padding: 10px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
  font-size: 11px;
`;

export const PhoneStatusTime = styled.span`
  font-weight: 500;
`;

export const PhoneStatusDots = styled.div`
  display: flex;
  gap: 4px;
`;

export const PhoneDot = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 9999px;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const PhoneImage = styled.img`
  width: 100%;
  height: 600px;
  object-fit: cover;
`;

/* Floating badges */

const BadgeBase = styled.div`
  position: absolute;
  background-color: #ffffff;
  border-radius: 1.5rem;
  padding: 14px;
  box-shadow: 0 18px 40px rgba(15, 39, 87, 0.35);
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 32px;
    height: 32px;
  }
`;

export const ShieldBadge = styled(BadgeBase)`
  top: 80px;
  right: -24px;
  transform: translateY(0.3px) rotate(0.16deg);

  svg {
    color: #4caf50;
  }
`;

export const LockBadge = styled(BadgeBase)`
  bottom: 130px;
  left: -24px;
  transform: translateY(-0.6px) rotate(-0.32deg);

  svg {
    color: #2b9fe8;
  }
`;

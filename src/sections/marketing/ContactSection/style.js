// components/downloadStyle.js
import styled from "styled-components";

export const DownloadWrapper = styled.section`
  position: relative;
  overflow: hidden;
  padding: 64px 0;
  background: linear-gradient(
    135deg,
    #2b9fe8,
    #6cc4f0,
    #2b9fe8
  ); /* from-[#2B9FE8] via-[#6CC4F0] to-[#2B9FE8] */

  @media (min-width: 768px) {
    padding: 96px 0;
  }
`;

export const BlurCircleLeft = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.1;
  pointer-events: none;

  &::before {
    content: "";
    position: absolute;
    top: 40px;
    left: 40px;
    width: 256px;
    height: 256px;
    background: #ffffff;
    border-radius: 9999px;
    filter: blur(60px);
  }
`;

export const BlurCircleRight = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.1;
  pointer-events: none;

  &::before {
    content: "";
    position: absolute;
    bottom: 40px;
    right: 40px;
    width: 384px;
    height: 384px;
    background: #ffffff;
    border-radius: 9999px;
    filter: blur(80px);
  }
`;

export const DownloadInner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 896px;
  margin: 0 auto;
  text-align: center;
  color: #ffffff;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;

    @media (min-width: 768px) {
      width: 96px;
      height: 96px;
    }
  }

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

export const Title = styled.h2`
  font-weight: 700;
  margin-bottom: 12px;
  font-size: 32px;
  color:white;

  @media (min-width: 768px) {
    font-size: 42px;
  }
`;

export const Subtitle = styled.p`
  font-size: 16px;
  margin-bottom: 32px;
  color: rgba(255, 255, 255, 0.9);

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const StoreButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  margin-bottom: 48px;

  @media (min-width: 576px) {
    flex-direction: row;
  }
`;

export const StoreButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 32px;
  border-radius: 16px;
  background-color: #ffffff;
  color: #1a1a2e;
  text-decoration: none;
  box-shadow: 0 20px 40px rgba(15, 39, 87, 0.25);
  transition: background-color 0.15s ease, transform 0.15s ease,
    box-shadow 0.15s ease;

  svg {
    flex-shrink: 0;
  }

  &:hover {
    background-color: #f3f4f6;
    transform: translateY(-1px);
    box-shadow: 0 24px 50px rgba(15, 39, 87, 0.3);
  }
`;

export const StoreButtonText = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;

  .small {
    font-size: 11px;
    opacity: 0.8;
  }

  .label {
    font-size: 14px;
    font-weight: 600;
  }
`;

export const QRCard = styled.div`
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QRBox = styled.div`
  background-color: #ffffff;
  padding: 24px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(15, 39, 87, 0.25);
`;

export const QRGrid = styled.div`
  width: 160px;
  height: 160px;
  background-color: #e5e7eb;
  border-radius: 16px;
  display: grid;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  gap: 4px;
  padding: 16px;
  justify-items: center;
  align-items: center;
`;

export const QRDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background-color: ${(props) => (props.dark ? "#1A1A2E" : "#ffffff")};
`;

export const ScanText = styled.p`
  margin-top: 8px;
  font-size: 13px;
  color: #4b5563;
  background-color: #ffffff;
`;

export const NewsletterWrapper = styled.div`
  max-width: 480px;
  margin: 0 auto;
`;

export const NewsletterTitle = styled.p`
  color: #ffffff;
  margin-bottom: 16px;
  font-size: 15px;
`;

export const EmailForm = styled.form`
  display: flex;
  flex-direction: row;
  gap: 8px;

  @media (max-width: 575.98px) {
    flex-direction: column;
  }
`;

export const EmailInputWrapper = styled.div`
  position: relative;
  flex: 1;
`;

export const EmailIcon = styled.span`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
`;

export const EmailInput = styled.input`
  width: 100%;
  padding: 12px 16px 12px 44px;
  border-radius: 14px;
  border: none;
  outline: none;
  font-size: 14px;
  background-color: #0000;

  &:focus {
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
  }
`;

export const NotifyButton = styled.button`
  padding: 12px 24px;
  border-radius: 14px;
  border: none;
  outline: none;
  background-color: #ff6b6b;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 12px 24px rgba(220, 38, 38, 0.4);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  transition: background-color 0.15s ease, box-shadow 0.15s ease,
    transform 0.15s ease;

  &:hover {
    background-color: #ff5252;
    transform: translateY(-1px);
    box-shadow: 0 16px 32px rgba(220, 38, 38, 0.5);
  }
`;

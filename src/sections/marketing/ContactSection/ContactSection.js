// components/DownloadSection.jsx
import React from "react";
import { Container } from "react-bootstrap";
import {
  DownloadWrapper,
  BlurCircleLeft,
  BlurCircleRight,
  DownloadInner,
  LogoWrapper,
  Title,
  Subtitle,
  StoreButtons,
  StoreButton,
  StoreButtonText,
  QRCard,
  QRBox,
  QRGrid,
  QRDot,
  ScanText,
  NewsletterWrapper,
  NewsletterTitle,
  EmailForm,
  EmailInputWrapper,
  EmailInput,
  EmailIcon,
  NotifyButton,
} from "./style";

import LogoWhite from "~image/logo/logo-white.png"; // change if you have a dedicated app icon

const ContactSection = () => {
  return (
    <DownloadWrapper id="download">
      <BlurCircleLeft />
      <BlurCircleRight />

      <Container>
        <DownloadInner>
          {/* Logo */}
          <LogoWrapper>
            <img src={'/image/logo/mmr-logo.png'} alt="MMR Logo" />
          </LogoWrapper>

          {/* Heading */}
          <Title>Take Control of Your Health Records Today</Title>
          <Subtitle>Free for first 2GB • No credit card required</Subtitle>

          {/* Store buttons */}
          <StoreButtons>
            <StoreButton href="#">
              {/* Apple icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path>
                <path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path>
              </svg>
              <StoreButtonText>
                <span className="small">Download on the</span>
                <span className="label">App Store</span>
              </StoreButtonText>
            </StoreButton>

            <StoreButton href="#">
              {/* Google Play icon (play circle) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
              <StoreButtonText>
                <span className="small">Get it on</span>
                <span className="label">Google Play</span>
              </StoreButtonText>
            </StoreButton>
          </StoreButtons>

          {/* QR card */}
          <QRCard>
            <QRBox>
              <QRGrid>
                {/* Just recreating the “fake QR” pattern, doesn’t have to be perfect */}
                {[
                  // row 1
                  "00001111",
                  // row 2
                  "00011100",
                  // row 3
                  "00001111",
                  // row 4
                  "00001110",
                  // row 5
                  "01111101",
                  // row 6
                  "01000101",
                  // row 7
                  "01010101",
                  // row 8
                  "00101010",
                ].map((row, rowIndex) =>
                  row.split("").map((val, colIndex) => (
                    <QRDot key={`${rowIndex}-${colIndex}`} dark={val === "1"} />
                  ))
                )}
              </QRGrid>
                          <ScanText>Scan to download</ScanText>

            </QRBox>
          </QRCard>

          {/* Newsletter */}
          <NewsletterWrapper>
            <NewsletterTitle>Get notified about new features</NewsletterTitle>

            <EmailForm
              onSubmit={(e) => {
                e.preventDefault();
                // handle submit
              }}
            >
              <EmailInputWrapper>
                <EmailIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  </svg>
                </EmailIcon>
                <EmailInput
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </EmailInputWrapper>

              <NotifyButton type="submit">Notify Me</NotifyButton>
            </EmailForm>
          </NewsletterWrapper>
        </DownloadInner>
      </Container>
    </DownloadWrapper>
  );
};

export default ContactSection;

// components/PhoneShowcase.jsx
import React from "react";
import { Container } from "react-bootstrap";
import {
  PhoneWrapper,
  PhoneInner,
  PhoneFrame,
  PhoneShell,
  PhoneStatusBar,
  PhoneStatusTime,
  PhoneStatusDots,
  PhoneDot,
  PhoneImage,
  ShieldBadge,
  LockBadge,
} from "./PhoneStyle.js";

const PhoneShowcase = () => {
  return (
    <PhoneWrapper>
      <Container>
        <PhoneInner>
          <PhoneFrame>
            <PhoneShell>
              <PhoneStatusBar>
                <PhoneStatusTime>9:41</PhoneStatusTime>
                <PhoneStatusDots>
                  <PhoneDot />
                  <PhoneDot />
                  <PhoneDot />
                </PhoneStatusDots>
              </PhoneStatusBar>

              <PhoneImage
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwYXBwJTIwbW9ja3VwJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NjQxMjE0MjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="MMR App Interface"
              />
            </PhoneShell>
          </PhoneFrame>

          {/* Floating shield badge (top-right) */}
          <ShieldBadge>
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
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            </svg>
          </ShieldBadge>

          {/* Floating lock badge (bottom-left) */}
          <LockBadge>
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
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </LockBadge>
        </PhoneInner>
      </Container>
    </PhoneWrapper>
  );
};

export default PhoneShowcase;

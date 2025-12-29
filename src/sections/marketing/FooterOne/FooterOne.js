
import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./style";

export default function FooterOne({ id }) {
  return (
    <Footer id={id} backgroundColor="#1a1a2e">
      <Container>
        <Footer.Box pbXL="40px">
          <Row className="gy-5">
            {/* Brand + description + contact */}
            <Col xs={12} md={3} style={{ paddingRight: "30px" }}>
              <Footer.Widgets className="footer-widgets footer-widgets--mmr">
                <Footer.BrandRow>
                  <Footer.LogoWrapper>
                    <Link href="/" legacyBehavior>
                      <a>
                        <img src={'/image/logo/mmr-logo.png'} alt="MMR Logo" />
                      </a>
                    </Link>
                  </Footer.LogoWrapper>
                  <Footer.BrandName>MMR</Footer.BrandName>
                </Footer.BrandRow>

                <Footer.Text>
                  India&apos;s first truly private Personal Health Record app.
                  Your data, your control, your privacy.
                </Footer.Text>

                <Footer.ContactList>
                  <Footer.ContactItem>
                    {/* Mail icon */}
                    <span className="icon">
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
                      >
                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect
                          x="2"
                          y="4"
                          width="20"
                          height="16"
                          rx="2"
                        ></rect>
                      </svg>
                    </span>
                    <a href="mailto:support@mmr.health">
                      support@mmr.health
                    </a>
                  </Footer.ContactItem>

                  <Footer.ContactItem>
                    {/* Phone icon */}
                    <span className="icon">
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
                      >
                        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                      </svg>
                    </span>
                    <a href="tel:+911234567890">+91 123 456 7890</a>
                  </Footer.ContactItem>
                </Footer.ContactList>
              </Footer.Widgets>
            </Col>

            {/* About */}
            <Col xs={6} md={3}>
              <Footer.Widgets>
                <Footer.Title>About</Footer.Title>
                <Footer.List>
                  <Footer.ListItems>
                    <a href="#mission">
                      <span className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        </svg>
                      </span>
                      Our Mission
                    </a>
                  </Footer.ListItems>

                  <Footer.ListItems>
                    <a href="#team">
                      <span className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                        </svg>
                      </span>
                      Team
                    </a>
                  </Footer.ListItems>

                  <Footer.ListItems>
                    <a href="#contact">
                      <span className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                        </svg>
                      </span>
                      Contact
                    </a>
                  </Footer.ListItems>
                </Footer.List>
              </Footer.Widgets>
            </Col>

            {/* Legal */}
            <Col xs={6} md={3}>
              <Footer.Widgets>
                <Footer.Title>Legal</Footer.Title>
                <Footer.List>
                  <Footer.ListItems>
                    <a href="/privacy">
                      <span className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        </svg>
                      </span>
                      Privacy Policy
                    </a>
                  </Footer.ListItems>

                  <Footer.ListItems>
                    <a href="/terms">
                      <span className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                          <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                          <path d="M10 9H8"></path>
                          <path d="M16 13H8"></path>
                          <path d="M16 17H8"></path>
                        </svg>
                      </span>
                      Terms of Service
                    </a>
                  </Footer.ListItems>

                  <Footer.ListItems>
                    <a href="#security">
                      <span className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        </svg>
                      </span>
                      Security
                    </a>
                  </Footer.ListItems>
                </Footer.List>
              </Footer.Widgets>
            </Col>

            {/* Support */}
            <Col xs={12} md={3}>
              <Footer.Widgets>
                <Footer.Title>Support</Footer.Title>
                <Footer.List>
                  <Footer.ListItems>
                    <a href="#help">
                      <span className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
                        </svg>
                      </span>
                      Help Center
                    </a>
                  </Footer.ListItems>

                  <Footer.ListItems>
                    <a href="#faq">
                      <span className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
                        </svg>
                      </span>
                      FAQ
                    </a>
                  </Footer.ListItems>

                  <Footer.ListItems>
                    <a href="#updates">
                      <span className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                          <rect
                            x="2"
                            y="4"
                            width="20"
                            height="16"
                            rx="2"
                          ></rect>
                        </svg>
                      </span>
                      Updates
                    </a>
                  </Footer.ListItems>
                </Footer.List>
              </Footer.Widgets>
            </Col>
          </Row>
        </Footer.Box>

        {/* Bottom bar */}
        <Footer.Copyright>
          <Footer.CopyrightText>
            © 2025 MMR - My Medical Record. All rights reserved.
          </Footer.CopyrightText>

          <Footer.PrivacyBadge>
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
              </svg>
            </span>
            <span>
              Your privacy is our priority • Data stored with 256-bit encryption
            </span>
          </Footer.PrivacyBadge>
        </Footer.Copyright>

        <Footer.Disclaimer>
          MMR is not affiliated with ABDM, ABHA, or any government health
          program.
          <br />
          We are an independent platform committed to patient privacy and data
          ownership.
        </Footer.Disclaimer>
      </Container>
    </Footer>
  );
}

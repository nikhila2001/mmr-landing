import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import Feature from "./style";
import ImageSection from "./ImageSection";
import { LuScanLine } from "react-icons/lu";
import { HiOutlineLanguage } from "react-icons/hi2";
import { FaRegClock } from "react-icons/fa6";
import { LuBrain } from "react-icons/lu";


const FeatureSection = ({ id, ...rest }) => {
  return (
    <Feature id={id} className="bg-blue-ribbon">
      <Container>
        <Row>
          <Col xs="auto" className="col-xl-12 col-lg-10">
            <Feature.Box mb="64px">
              <Feature.Title fontColor="#1a1a2e">
                Powerful Features for  <span style={{ color: "#2b9fe8" }}>Better Health Management</span>
              </Feature.Title>
              <Feature.Text className="text-center">
                Everything you need to manage your medical records efficiently and securely
              </Feature.Text>
            </Feature.Box>
          </Col>
        </Row>
        <Row className="align-items-center justify-content-center g-5" style={{ marginBottom: "90px" }}>
          <Col
            xs="12"
            className="col-xl-6 col-lg-7 col-md-10 order-2 order-xl-1 "
            style={{ paddingRight: "50px" }}
          >
            <Feature.Box mt="0" mtXL="0" pb="40px" pbLG="0">
              <Feature.Icon as="div">
                <LuScanLine size={32} strokeWidth={2} />
              </Feature.Icon>
              <div style={{ color: "#2b9fe8", marginBottom: "8px", textAlign: "start" }}>Smart OCR</div>
              <Feature.Title style={{ textAlign: "start", fontSize: "32px", fontWeight: "700", color: "#1a1a2e", lineHeight: "1.5" }}>
                Upload Any Document - We Digitize It
              </Feature.Title>
              <Feature.Text style={{ textAlign: "start", color: "#4a5565", fontSize: "18px", lineHeight: "1.5" }}>
                Take a photo of prescriptions, reports, or bills. Our AI instantly converts them to searchable digital records.
              </Feature.Text>
            </Feature.Box>
          </Col>
          <ImageSection src={'/image/movingMobile.jfif'} />
        </Row>

        <Row className="align-items-center justify-content-center flex-row-reverse g-5" style={{ marginBottom: "90px" }}>
          <Col
            xs="12"
            className="col-xl-6 col-lg-7 col-md-10 order-2 order-xl-1"
            style={{ paddingLeft: "50px" }}
          >
            <Feature.Box mt="0" mtXL="0" pb="40px" pbLG="0">
              <Feature.Icon as="div">
                <HiOutlineLanguage size={32} strokeWidth={2} />
              </Feature.Icon>
              <div style={{ color: "#2b9fe8", marginBottom: "8px", textAlign: "start" }}>Multi-language Support</div>
              <Feature.Title style={{ textAlign: "start", fontSize: "32px", fontWeight: "700", color: "#1a1a2e", lineHeight: "1.5" }}>
                Hindi, English, Marathi - Your Choice
              </Feature.Title>
              <Feature.Text style={{ textAlign: "start", color: "#4a5565", fontSize: "18px", lineHeight: "1.5" }}>
                Use MMR in your preferred language. All features, including OCR, work seamlessly in Hindi, English, and Marathi.
              </Feature.Text>
            </Feature.Box>
          </Col>
          <ImageSection src={'/image/home/doctor.jfif'} />
        </Row>

        <Row className="align-items-center justify-content-center g-5" style={{ marginBottom: "90px" }}>
          <Col
            xs="12"
            className="col-xl-6 col-lg-7 col-md-10 order-2 order-xl-1 "
            style={{ paddingLeft: "50px" }}
          >
            <Feature.Box mt="0" mtXL="0" pb="40px" pbLG="0">
              <Feature.Icon as="div">
                <FaRegClock size={32} strokeWidth={2} />
              </Feature.Icon>
              <div style={{ color: "#2b9fe8", marginBottom: "8px", textAlign: "start" }}>Visit Organization</div>
              <Feature.Title style={{ textAlign: "start", fontSize: "32px", fontWeight: "700", color: "#1a1a2e", lineHeight: "1.5" }}>
                All Records, One Timeline
              </Feature.Title>
              <Feature.Text style={{ textAlign: "start", color: "#4a5565", fontSize: "18px", lineHeight: "1.5" }}>
                See your entire medical history organized by visits. Every prescription, test, and consultation in chronological order.
              </Feature.Text>
            </Feature.Box>
          </Col>
          <ImageSection src={'/image/movingMobile.jfif'} />
        </Row>

        <Row className="align-items-center justify-content-center flex-row-reverse g-5" style={{ marginBottom: "90px" }}>
          <Col
            xs="12"
            className="col-xl-6 col-lg-7 col-md-10 order-2 order-xl-1 "
            style={{ paddingLeft: "50px" }}
          >
            <Feature.Box mt="0" mtXL="0" pb="40px" pbLG="0">
              <Feature.Icon as="div">
                <LuBrain size={32} strokeWidth={2} />
              </Feature.Icon>
              <div style={{ color: "#2b9fe8", marginBottom: "8px", textAlign: "start" }}>AI Assistant</div>
              <Feature.Title style={{ textAlign: "start", fontSize: "32px", fontWeight: "700", color: "#1a1a2e", lineHeight: "1.5" }}>
                Smart Reminders & Insights
              </Feature.Title>
              <Feature.Text style={{ textAlign: "start", color: "#4a5565", fontSize: "18px", lineHeight: "1.5" }}>
                Never miss a medication or follow-up. Get intelligent reminders and health insights based on your records.
              </Feature.Text>
            </Feature.Box>
          </Col>
          <ImageSection src={'/image/home/doctor.jfif'} />
        </Row>
      </Container>
    </Feature>
  )
}

export default FeatureSection

import React from "react";
import Image from "next/image";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import TabContentWidget from "./Component/TabContentWidget";
import TabNavWidget from "./Component/TabNavWidget";
import Feature from "./style";
import ImageSection from "./ImageSection";

const FeatureSection = ({ ...rest }) => {
  return (
    <Feature className="bg-blue-ribbon">  
      <Container>
        <Row>
          <Col xs="auto" className="col-xl-12 col-lg-10">
            <Feature.Box mb="64px">
              <Feature.Title  fontColor="#1a1a2e">
                Powerful Features for  <span style={{ color:"#2b9fe8"}}>Better Health Management</span>
              </Feature.Title>
              <Feature.Text >
                Everything you need to manage your medical records efficiently and securely
              </Feature.Text>
            </Feature.Box>
          </Col>
        </Row>
        <Row className="align-items-center justify-content-center" style={{ marginBottom: "90px" }}>
          <Col
            xs="12"
            className="col-xl-6 col-lg-7 col-md-10 order-2 order-xl-1"
          >
            <Feature.Box  mt="0" mtXL="0" pb="40px" pbLG="0">
              <Feature.Icon as="div">
                <i className="fa fa-file-invoice" />
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
           <ImageSection/>
        </Row>
         
        <Row className="align-items-center justify-content-center flex-row-reverse" style={{ marginBottom:"90px"}}>
          <Col
            xs="12"
            className="col-xl-5 col-lg-7 col-md-10 order-2 order-xl-1"
          >
            <Feature.Box  mt="0" mtXL="0" pb="40px" pbLG="0">
              <Feature.Icon as="div">
                <i className="fa fa-file-invoice" />
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
       <ImageSection/>
        </Row>

         <Row className="align-items-center justify-content-center" style={{ marginBottom: "90px" }}>
          <Col
            xs="12"
            className="col-xl-6 col-lg-7 col-md-10 order-2 order-xl-1"
          >
            <Feature.Box  mt="0" mtXL="0" pb="40px" pbLG="0">
              <Feature.Icon as="div">
                <i className="fa fa-file-invoice" />
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
          <ImageSection/>
        </Row>

          <Row className="align-items-center justify-content-center flex-row-reverse" style={{ marginBottom:"90px"}}>
          <Col
            xs="12"
            className="col-xl-5 col-lg-7 col-md-10 order-2 order-xl-1"
          >
            <Feature.Box  mt="0" mtXL="0" pb="40px" pbLG="0">
              <Feature.Icon as="div">
                <i className="fa fa-file-invoice" />
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
          <ImageSection/>
        </Row>
      </Container>
    </Feature>
  )
}

export default FeatureSection

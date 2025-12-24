import React from "react";
import Image from "next/image";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import TabContentWidget from "./Component/TabContentWidget";
import TabNavWidget from "./Component/TabNavWidget";
import Feature from "./style";
// import featureShape2 from "image/marketing/l1-full-circle-shape.png";
// import featureShape1 from "image/marketing/l1-half-circle-shape.png";
const FeatureSection = ({ ...rest }) => {
  return (
    <Feature className="bg-blue-ribbon">  
      <Container>
        <Row>
          <Col xs="auto" className="col-xl-12 col-lg-10">
            <Feature.Box mb="64px" mbMD="80px" mbLG="148px">
              <Feature.Title  fontColor="#1a1a2e">
                Powerful Features for <span style={{ color:"#2b9fe8"}}>Better Health Management</span>
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
            <Feature.Box mrXL="50px" mt="0" mtXL="0" pb="40px" pbLG="0">
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
          <Col
            xs="12"
            className="col-xl-6 col-lg-6 col-md-8 col-sm-9 order-1 order-xl-2 d-flex justify-content-center"
          >
            <div
              className="position-relative rounded-5 shadow-lg overflow-hidden bg-white"
              style={{ maxWidth: "520px", borderRadius: "24px" }}
            >
              <img
                src="/image/movingMobile.jfif"
                alt="content"
                className="img-fluid w-100 h-100 object-fit-cover d-block"
                style={{ height: "400px" }}
              />
            </div>
          </Col>
        </Row>
         
        <Row className="align-items-center justify-content-center flex-row-reverse" style={{ marginBottom:"90px"}}>
          <Col
            xs="12"
            className="col-xl-5 col-lg-7 col-md-10 order-2 order-xl-1"
          >
            <Feature.Box mrXL="50px" mt="0" mtXL="0" pb="40px" pbLG="0">
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
          <Col
            xs="12"
            className="col-xl-7 col-lg-6 col-md-8 col-sm-9 order-1 order-xl-2"
          >
            <div className="position-relative">
              <div className="position-relative rounded-5 shadow-lg overflow-hidden" style={{ maxWidth: "520px", borderRadius:"24px" }} >
                <img src="/image/movingMobile.jfif" alt="content" className="w-100 object-fit-cover rounded-5 " style={{ height: "400px" }} />

              </div>

            </div>
          </Col>
        </Row>

         <Row className="align-items-center justify-content-center" style={{ marginBottom: "90px" }}>
          <Col
            xs="12"
            className="col-xl-6 col-lg-7 col-md-10 order-2 order-xl-1"
          >
            <Feature.Box mrXL="50px" mt="0" mtXL="0" pb="40px" pbLG="0">
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
          <Col
            xs="12"
            className="col-xl-6 col-lg-6 col-md-8 col-sm-9 order-1 order-xl-2 d-flex justify-content-center"
          >
            <Feature.Wrapper
              className="position-relative rounded-5 shadow-lg overflow-hidden bg-white"
              style={{ maxWidth: "520px", borderRadius: "24px" }}
            >
              <Feature.Image
                src="/image/movingMobile.jfif"
                alt="content"
                className="img-fluid w-100 h-100 object-fit-cover d-block"
                style={{ height: "400px" }}
              />
            </Feature.Wrapper>
          </Col>
        </Row>

          <Row className="align-items-center justify-content-center flex-row-reverse" style={{ marginBottom:"90px"}}>
          <Col
            xs="12"
            className="col-xl-5 col-lg-7 col-md-10 order-2 order-xl-1"
          >
            <Feature.Box mrXL="50px" mt="0" mtXL="0" pb="40px" pbLG="0">
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
          <Col
            xs="12"
            className="col-xl-7 col-lg-6 col-md-8 col-sm-9 order-1 order-xl-2"
          >
            <div className="position-relative">
              <div className="position-relative rounded-5 shadow-lg overflow-hidden" style={{ maxWidth: "520px", borderRadius:"24px" }} >
                <img src="/image/movingMobile.jfif" alt="content" className="w-100 object-fit-cover rounded-5 " style={{ height: "400px" }} />

              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </Feature>
  )
}

export default FeatureSection

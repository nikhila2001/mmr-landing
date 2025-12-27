import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import ServicesCard from "./Component/Card"
import Service from "./style"
import { ServiceData } from "~data"
import { MdOutlineShield } from "react-icons/md";

export default function ServicesSection({ id, ...rest }) {
  return (
    <Service id={id} backgroundColor="" {...rest}>
      <Container fluid>
        <Row className="text-center">
          <Col className="col-xxl-12 col-xl-7 col-md-9 col-sm-10">
            <Service.Box className="text-center" mb="30px" mbLG="55px">

              <Service.Title as="h2">Complete Privacy, <span style={{ color: "#2b9fe8" }}>Absolute Control</span></Service.Title>
              <Service.Subtitle as="h6" fontColor="#4a5565">
                Your medical records are yours alone. No third-party access, no data sharing, no compromises.
              </Service.Subtitle>
            </Service.Box>
          </Col>
        </Row>
        <Row className="justify-content-center gap-md-8 gap-6">
          {ServiceData.services.map(({ title, icon, text, id, iconBackground, shadowColor }) => {
            return (
              <Col
                xs="12"
                className="col-xl-3 col-lg-6 col-md-6 col-sm-9 col-xs-10 "
                key={id}
              >
                <ServicesCard
                  title={title}
                  text={text}
                  icon={icon}
                  iconBackground={iconBackground}
                />
              </Col>
            )
          })}
        </Row>
        <div className="text-center " style={{ marginTop: "64px" }}>
          <div className="d-inline-flex py-3 px-4 rounded-pill gap-1 align-items-center" style={{ backgroundColor: "#4caf501a", color: "#4caf50" }}>
            <span><MdOutlineShield size={20} /></span>
            Certified secure by international security standards</div>
        </div>
      </Container>
    </Service>
  )
}




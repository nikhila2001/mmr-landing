import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Hero from "./style";
import Video from "~components/VideoModal";
import { Link } from "~components";
import PhoneShowcase from "./PhoneShowcase";
import { FiLock } from "react-icons/fi";
import { PiMedalLight } from "react-icons/pi";
import { LuShield } from "react-icons/lu";
import { CgPlayButtonO } from "react-icons/cg";


export default function HeroSection({ ...rest }) {
  return (
    <Hero backgroundColor="#fff" {...rest}>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col className="col-xxl-7 col-xl-6 col-lg-7 col-md-9 col-xs-11 order-2 order-lg-1">
            <Hero.Content>
              <Hero.Title as="h2">
                Your Medical Records. <span style={{ color: "#2b9fe8"}}>Your Control.</span> <span style={{ color:"#4caf50"
                }}>Your Privacy.</span> 
              </Hero.Title>
              <Hero.Text>
              India's first truly private health record app - No ABHA integration, No insurance access
              </Hero.Text>
              <Hero.Buttons>
                <Hero.Button
                  className="btn-1"
                  to="/"
                  as={Link}
                >
                  <span style={{ marginRight:"16px"}}><CgPlayButtonO size={20}/></span>
                  Download Now
                </Hero.Button>
                <Hero.Button className="btn-2  py-4 px-8" to="/" as={Link}>
                  See How It Works
                </Hero.Button>
              </Hero.Buttons>
              <Hero.Footer>
                <div style={{ display:"flex", alignItems:"center", gap:"3px"}}>
                    <span style={{ color:"#4caf50"
                }}><FiLock size={20}/></span>
                <p style={{ marginBottom:"0"}}>Bank-level encryption</p>
                </div>
              <div style={{ display:"flex", alignItems:"center", gap:"3px"}}>
                  <span style={{ color:"#4caf50"
                }}><PiMedalLight size={20}/></span>
                <p style={{ marginBottom:"0"}}>Doctor recommended</p>
              </div>
              <div style={{ display:"flex", alignItems:"center", gap:"3px"}}>
                 <span style={{ color:"#4caf50"
                }}><LuShield size={20}/></span>
                <p style={{ marginBottom:"0"}}>100% Private</p>

              </div>
               
              </Hero.Footer>
            </Hero.Content>
          </Col>
          <Col
            xs="12"
            className="col-xxl-5 col-xl-6 col-lg-5 col-md-9 col-xs-11 order-1 order-lg-2"
          >
           
              {/* <Hero.Image
                src='/image/home/movingMobile.jpg'
                  alt="content"
                style={{ width:"500px"}}
              />   */}
              <PhoneShowcase />
             
             
          </Col>
        </Row>
      </Container>
    </Hero>
  );
}

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Hero from "./style";
import Video from "~components/VideoModal";
import { Link } from "~components";

export default function HeroSection({ ...rest }) {
  return (
    <Hero backgroundColor="#fff" {...rest}>
      <Container>
        <Row className="align-items-center justify-content-center gap-12">
          <Col className="col-xxl-7 col-xl-6 col-lg-7 col-md-9 col-xs-11 order-2 order-lg-1">
            <Hero.Content>
              {/* <Hero.Subtitle as="h4" fontColor="#15cda8">
                Startup &amp; Small Business consultancy
              </Hero.Subtitle> */}
              <Hero.Title as="h2">
                Your Medical Records. <span style={{ color: "#2b9fe8"}}>Your Control.</span> <span style={{ color:"#4caf50"
                }}>Your Privacy.</span> 
              </Hero.Title>
              <Hero.Text>
              India's first truly private health record app - No ABHA integration, No insurance access
              </Hero.Text>
              <Hero.Buttons mt="30px" mb="32px" mtLG="50px">
                <Hero.Button
                  className="btn-1 py-4 px-8"
                  to="/"
                  as={Link}
                >
                  Download Now
                </Hero.Button>
                <Hero.Button className="btn-2  py-4 px-8" to="/" as={Link}>
                  See How It Works
                </Hero.Button>
              </Hero.Buttons>
              <Hero.Footer>
                <p>Bank-level encryption</p>
                <p>Doctor recommended</p>
                <p>100% Private</p>

              </Hero.Footer>
            </Hero.Content>
          </Col>
          <Col
            xs="12"
            className="col-xxl-5 col-xl-6 col-lg-5 col-md-9 col-xs-11 order-1 order-lg-2"
          >
            {/* <Hero.Video
              className="welcome-img welcome-img--l9 video-box"
              mb="30px"
              mbLG="0"
            > */}
              <Hero.Image
                src='/image/home/movingMobile.jpg'
                  alt="content"
                style={{ width:"500px"}}
              />  
              
             
              {/* Video Button */}
              {/* <Video id="LWZ7iytIA6k" className="video-btn">
                <i className="fa fa-play" />
              </Video> */}
            {/* </Hero.Video> */}
          </Col>
        </Row>
      </Container>
    </Hero>
  );
}

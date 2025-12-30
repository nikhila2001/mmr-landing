
import React, { useRef } from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import Testimonial from "./style";
import TestimonialData from "~data/services/testimonial";
import TestimonialCard from "./Component/Card";

const TestimonialSection = ({ id }) => {
  const elSlider = useRef(null);

  const sliderConfig1 = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Testimonial id={id} className="scroll-fade">
      <Container>
        {/* Heading */}
        <Row className="justify-content-center text-center">
          <Col xs="12" lg="10" xl="8">
            <Testimonial.Box mb="50px">
              <Testimonial.Title>
                Trusted by <span>Healthcare Professionals</span>
              </Testimonial.Title>

              <Testimonial.Subtitle>
                See what doctors across India are saying about MMR
              </Testimonial.Subtitle>
            </Testimonial.Box>
          </Col>
        </Row>

        {/* Slider */}
        <Row className="justify-content-center">
          <Col xs="12">
            <Testimonial.SliderWrapper>
              <Slider ref={elSlider} {...sliderConfig1}>
                {TestimonialData.testimonial.map(
                  ({ image, userName, userPosition, userAddress, text }, idx) => (
                    <div key={idx}>
                      <Testimonial.Card>
                        <TestimonialCard
                          image={image}
                          userName={userName}
                          userPosition={userPosition}
                          hospital={userAddress}
                          text={text}
                        />
                      </Testimonial.Card>
                    </div>
                  )
                )}
              </Slider>

              {/* Arrows */}
              <Testimonial.SliderButton>
                <button onClick={() => elSlider.current?.slickPrev()}>
                  <i className="fas fa-chevron-left" />
                </button>

                <button onClick={() => elSlider.current?.slickNext()}>
                  <i className="fas fa-chevron-right" />
                </button>
              </Testimonial.SliderButton>
            </Testimonial.SliderWrapper>
          </Col>
        </Row>
      </Container>
    </Testimonial>
  );
};

export default TestimonialSection;

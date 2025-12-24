// import React, { useRef } from "react"
// import Slider from "react-slick"
// import TestiomialCard from './Component/Card'
// import Testimonial from './style'
// import TestimonialData from '~data/services/testimonial'
// import { Container, Row, Col } from 'react-bootstrap'
// export default function TestimonialSection(){
//   const elSlider = useRef()

//   const sliderConfig1 = {
//     dots: false,
//     infinite: true,
//     speed: 900,
//     slidesToShow: 4,
//     slidesToScroll: 2,
//     arrows: false,
//     centerPadding:false,
//     autoPlay:true,
//     responsive: [{
//             breakpoint: 1200,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//             },
//         },
//         {
//             breakpoint: 991,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2,
//             },
//         },
//         {
//             breakpoint: 767,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//             },
//         },
//     ],
//   }
// return(
// <Testimonial backgroundColor="#f3f4f6">
//   <Container>
//     <Row>
//       <Col xs="12" className="col-lg-10 col-xl-9 col-xxl-7">
//         <Testimonial.Box mbLG="55px" mbSM="30px">
//         <Testimonial.Title mb="20px" as="h2">Trusted by Healthcare Professionals</Testimonial.Title>

//           <Testimonial.Subtitle fontColor="#ff7272" as="h6">See what doctors across India are saying about MMR  </Testimonial.Subtitle>
//         </Testimonial.Box>
//       </Col>
//       <Col xs="12" className="col-xxl-5 col-xl-3 col-lg-2 text-center text-lg-end">
//         <Testimonial.SliderButton>
          
//             <Testimonial.Button className="slick-arrow" onClick={() => {
//                     elSlider.current.slickPrev();
//                   }}>
//               <i className="fas fa-arrow-left"></i>
//             </Testimonial.Button>
//             <Testimonial.Button className="slick-arrow"
//               onClick={() => {
//                 elSlider.current.slickNext();
//               }}
//             >
//               <i className="fas fa-arrow-right"></i>
//             </Testimonial.Button>
//           </Testimonial.SliderButton>
//       </Col>
//     </Row>
//     <Slider
//           ref={elSlider}
//           className="testimonial-slider row justify-content-center"
//           {...sliderConfig1}
//         >

//         {TestimonialData.testimonial.map(({icon, image, userName,userPosition,text },index)=>{

//           return(

//             <TestiomialCard
//               icon={icon}
//               image={image}
//               userName={userName}
//               userPosition={userPosition}
//               text={text}
//               key={"ats" + index}
//                     />
//           )
//         })}

//     </Slider>
//   </Container>
// </Testimonial>
// )
// }


import React, { useRef } from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import Testimonial from './style' // ⬅ the styled file below
import TestimonialData from '~data/services/testimonial';
import TestiomialCard from './Component/Card' // your card component

const TestimonialSection = () => {
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
    <Testimonial backgroundColor="#f3f4f6">
      <Container>
        {/* Heading */}
        <Row className="justify-content-center text-center">
          <Col xs="12" lg="10" xl="9" xxl="7">
            <Testimonial.Box mbLG="55px" mbSM="30px">
              <Testimonial.Title as="h2" mb="16px">
                Trusted by{" "}
                <span>Healthcare Professionals</span>
              </Testimonial.Title>

              <Testimonial.Subtitle as="h6">
                See what doctors across India are saying about MMR
              </Testimonial.Subtitle>
            </Testimonial.Box>
          </Col>
        </Row>

        {/* Slider + arrows */}
        <Row className="justify-content-center">
          <Col xs="12">
            <Testimonial.SliderWrapper>
              <Slider
                ref={elSlider}
                className="testimonial-slider"
                {...sliderConfig1}
              >
                {TestimonialData.testimonial.map(
                  ({ icon, image, userName, userPosition, text }, index) => (
                    <div key={`ats-${index}`}>
                      <Testimonial.Card>
                        <TestiomialCard
                          icon={icon}
                          image={image}
                          userName={userName}
                          userPosition={userPosition}
                          text={text}
                        />
                      </Testimonial.Card>
                    </div>
                  )
                )}
              </Slider>

              <Testimonial.SliderButton>
                <button
                  type="button"
                  onClick={() => elSlider.current?.slickPrev()}
                >
                  <i className="fas fa-arrow-left" />
                </button>
                <button
                  type="button"
                  onClick={() => elSlider.current?.slickNext()}
                >
                  <i className="fas fa-arrow-right" />
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

// import React from 'react'
// import ProcessCard from './Components/Card'
// import { Container, Row, Col } from 'react-bootstrap'
// import Process from "./style"
// import ProcessData from "~data/it/Process"
// export default function ProcessSection({...rest }){
// return(
// <Process>
//   <Container>
//     <Process.Box  pb="30p" pbXL="50px">
//       <Row>
//         <Col xs="12" className="text-center">
//             <Process.Subtitle as="h5">Our Process</Process.Subtitle>
//             <Process.Title as="h2">Digital system for your company</Process.Title>
//         </Col>
//       </Row>
//     </Process.Box>
//     <Process.Widgets as="div">
//     <Row className="justify-content-center">
//         {ProcessData.map(({title,text,icon,iconBackground, id})=>{
//              return(
//             <Col xs="12" className="col-lg-4 col-md-6 col-xs-6 single-widget text-center"  key={id}>
//                 <ProcessCard icon={icon} iconBackground={iconBackground} title={title} text={text}/>
//             </Col>
//          )
//         })}
//     </Row>
//     </Process.Widgets>
//   </Container>
// </Process>

// )
// }

// 

import React from "react";
import {
  Section,
  Container,
  Header,
  Title,
  Highlight,
  Subtitle,
  Timeline,
  StepCircle,
  Line,
  Arrow,
  Cards,
  Card,
  IconBox,
  CardTitle,
  CardText,
  ActionButton,
  StepsSection,
  TopRow,
  CircleRow,
  CardIcon
} from "./style";
import { FaArrowRight } from "react-icons/fa6";
import { FiUserPlus } from "react-icons/fi";
import { FiUpload } from "react-icons/fi";
import { CiShare2 } from "react-icons/ci";

export default function ProcessSection() {
  return (
    <Section>
      <Container>
        {/* Header */}
        <Header>
          <Title>
            Get Started in <Highlight>3 Simple Steps</Highlight>
          </Title>
          <Subtitle>
            Setting up your private health record takes less than 5 minutes
          </Subtitle>
        </Header>

        <StepsSection>
  {/* Circles + Line */}
  <TopRow>
    <CircleRow>
      <StepCircle>01</StepCircle>
      <StepCircle>02</StepCircle>
      <StepCircle>03</StepCircle>
    </CircleRow>

    <Line />
  </TopRow>

  {/* Cards */}
  <Cards>
    <Card>
      <CardIcon>
        <FiUserPlus size={28} strokeWidth={2} />
      </CardIcon>
      <CardTitle>Sign Up with Email</CardTitle>
      <CardText>
        Create your account in seconds with just your email. No government ID required.
      </CardText>
    </Card>

    <Card>
            <CardIcon>
              <FiUpload size={28} strokeWidth={2} />
            </CardIcon>

      <CardTitle>Upload Your Records</CardTitle>
      <CardText>
        Take photos of prescriptions, reports, or bills. Our AI organizes everything automatically.
      </CardText>
    </Card>

    <Card>
            <CardIcon>
              <CiShare2 size={28} strokeWidth={2} />  
            </CardIcon>

      <CardTitle>Access Anywhere, Share Securely</CardTitle>
      <CardText>
        View your records anytime, anywhere. Share with doctors using secure time-limited links.
      </CardText>
    </Card>
  </Cards>
</StepsSection>

        <ActionButton className="">Get Started Now
          <span style={{ marginLeft:"16px"}}><FaArrowRight/></span>
        </ActionButton>
      </Container>
    </Section>
  );
}

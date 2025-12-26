import React from "react";
import Counter from './style'
import { Container, Row, Col } from "react-bootstrap";
import {
  ComparisonWrapper,
  TableBox,
  HeaderCell,
  FeatureCell,
  ValueCell,
  Pill,
  CheckIcon,
  CrossIcon,
  TableRow
} from './style';
import Testimonial from "../../app/Testimonial/style"

const ComparisonTable = () => {
  return (
    <ComparisonWrapper>
      <Container>
           <Row className="justify-content-center text-center">
                  <Col xs="12" lg="10" xl="9" xxl="7">
                    <Testimonial.Box mbLG="55px" mbSM="30px">
                      <Testimonial.Title as="h2" mb="16px">
                        Why Choose{" "}
                        <span>MMR</span>
                      </Testimonial.Title>
        
                      <Testimonial.Subtitle as="h6">
                        Compare MMR with traditional health record systems
                      </Testimonial.Subtitle>
                    </Testimonial.Box>
                  </Col>
                </Row>
        <TableBox>
          {/* Header Row */}
          <Row className="table-row header-row">
            <HeaderCell className="col-3">Feature</HeaderCell>

            <HeaderCell className="col-3 text-center">
              <div style={{ display:"flex", flexDirection:"column", alignItems:"center"}}>
                <span>MMR</span>
                <Pill className="pill">Privacy First</Pill>

              </div>
     
            </HeaderCell>

            <HeaderCell className="col-3">ABHA-linked Apps</HeaderCell>
            <HeaderCell className="col-3">Paper Records</HeaderCell>
          </Row>

          {/* ---------------- TABLE ROWS ---------------- */}

          {/* 1 */}
          <TableRow className="table-row">
            <FeatureCell className="col-3">Data Privacy</FeatureCell>
            <ValueCell className="col-3">
              <CheckIcon /> Complete – You own your data
            </ValueCell>
            <ValueCell className="col-3">
              <CrossIcon /> Limited – Government access
            </ValueCell>
            <ValueCell className="col-3">
              <CheckIcon /> Complete – Physical control
            </ValueCell>
          </TableRow>

          {/* 2 */}
          <TableRow className="table-row">
            <FeatureCell className="col-3">Government Access</FeatureCell>
            <ValueCell className="col-3">
              <CrossIcon /> No access
            </ValueCell>
            <ValueCell className="col-3">
              <CheckIcon /> Full access through ABDM
            </ValueCell>
            <ValueCell className="col-3">
              <CrossIcon /> No access
            </ValueCell>
          </TableRow>

          {/* 3 */}
          <TableRow className="table-row">
            <FeatureCell className="col-3">Insurance Visibility</FeatureCell>
            <ValueCell className="col-3">
              <CrossIcon /> No visibility
            </ValueCell>
            <ValueCell className="col-3">
              <CheckIcon /> Potential access
            </ValueCell>
            <ValueCell className="col-3">
              <CrossIcon /> No visibility
            </ValueCell>
          </TableRow>

          {/* 4 */}
          <TableRow className="table-row">
            <FeatureCell className="col-3">Offline Access</FeatureCell>
            <ValueCell className="col-3">
              <CheckIcon /> Yes – Anytime
            </ValueCell>
            <ValueCell className="col-3">
              <CheckIcon /> Requires internet
            </ValueCell>
            <ValueCell className="col-3">
              <CheckIcon /> Yes – If available
            </ValueCell>
          </TableRow>

          {/* Continue similarly for all rows... */}
             {/* 4 */}
          <TableRow className="table-row">
            <FeatureCell className="col-3">Multi-language Support</FeatureCell>
            <ValueCell className="col-3">
              <CheckIcon /> Hindi, English, Marathi
            </ValueCell>
            <ValueCell className="col-3">
              <CrossIcon /> Limited
            </ValueCell>
            <ValueCell className="col-3">
              <CheckIcon /> Doctor dependent
            </ValueCell>
          </TableRow>

             {/* 4 */}
          <TableRow className="table-row">
            <FeatureCell className="col-3">Doctor Acceptance</FeatureCell>
            <ValueCell className="col-3">
              <CheckIcon /> High - Digital format
            </ValueCell>
            <ValueCell className="col-3">
              <CheckIcon /> Growing
            </ValueCell>
            <ValueCell className="col-3">
              <CheckIcon /> Universal
            </ValueCell>
          </TableRow>

             {/* 4 */}
          <TableRow className="table-row">
            <FeatureCell className="col-3">Search & Organization</FeatureCell>
            <ValueCell className="col-3">
              <CheckIcon /> Smart AI search
            </ValueCell>
            <ValueCell className="col-3">
              <CheckIcon /> Basic search
            </ValueCell>
            <ValueCell className="col-3">
              <CrossIcon /> Manual sorting
            </ValueCell>
          </TableRow>

             {/* 4 */}
          <TableRow className="table-row">
            <FeatureCell className="col-3">Data Security</FeatureCell>
            <ValueCell className="col-3">
              <CheckIcon /> 256-bit encryption
            </ValueCell>
            <ValueCell className="col-3">
              <CrossIcon /> Government standard
            </ValueCell>
            <ValueCell className="col-3">
              <CheckIcon /> Physical security only
            </ValueCell>
          </TableRow>

        </TableBox>
      </Container>
    </ComparisonWrapper>
  );
};

export default ComparisonTable;
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
  CrossIcon
} from './style';

const ComparisonTable = () => {
  return (
    <ComparisonWrapper>
      <Container>
        <TableBox>
          {/* Header Row */}
          <Row className="table-row header-row">
            <HeaderCell className="col-3">Feature</HeaderCell>

            <HeaderCell className="col-3">
              MMR
              <Pill>Privacy First</Pill>
            </HeaderCell>

            <HeaderCell className="col-3">ABHA-linked Apps</HeaderCell>
            <HeaderCell className="col-3">Paper Records</HeaderCell>
          </Row>

          {/* ---------------- TABLE ROWS ---------------- */}

          {/* 1 */}
          <Row className="table-row">
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
          </Row>

          {/* 2 */}
          <Row className="table-row">
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
          </Row>

          {/* 3 */}
          <Row className="table-row">
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
          </Row>

          {/* 4 */}
          <Row className="table-row">
            <FeatureCell className="col-3">Offline Access</FeatureCell>
            <ValueCell className="col-3">
              <CheckIcon /> Yes – Anytime
            </ValueCell>
            <ValueCell className="col-3">
              <CrossIcon /> Requires internet
            </ValueCell>
            <ValueCell className="col-3">
              <CheckIcon /> Yes – If available
            </ValueCell>
          </Row>

          {/* Continue similarly for all rows... */}
        </TableBox>
      </Container>
    </ComparisonWrapper>
  );
};

export default ComparisonTable;
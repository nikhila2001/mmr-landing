import { Col } from "react-bootstrap";
import {
  ImageWrapper,
  InnerCard,
  MainImage,
  ImageOverlay,
  OuterGlow
} from "./StyledImageSection";

export default function ImageSection() {
  return (
    <Col
      xs="12"
      className="col-xl-6 col-lg-6 col-md-8 col-sm-9 order-1 order-xl-2 d-flex justify-content-center"
    >
      <ImageWrapper>
        {/* Foreground image card */}
        <InnerCard>
          <MainImage
            src="/image/movingMobile.jfif"
            alt="MMR App Interface"
          />
          <ImageOverlay />
        </InnerCard>

        {/* Background glow */}
        <OuterGlow />
      </ImageWrapper>
    </Col>
  );
}

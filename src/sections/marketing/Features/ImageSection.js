import { Col } from "react-bootstrap";
import {
  ImageWrapper,
  InnerCard,
  MainImage,
  ImageOverlay,
  OuterGlow
} from "./StyledImageSection";

export default function ImageSection({ src }) {
  return (
    <Col
      xs="12"
      className="col-xl-6 col-lg-6 col-md-8 col-sm-9 order-1 order-xl-2 d-flex justify-content-center p-0"
    >
      <ImageWrapper>
        {/* Foreground image card */}
        <InnerCard>
          <MainImage
            src={src}
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

import React from "react"
import { PageWrapper } from "~components/Core"
import HeroSection from "~sections/startup/Hero/HeroSection"
import ServiceSection from "~sections/services/Services/ServicesSection"
import FeatureSection from "~sections/marketing/Features"
import TestimonialSection from "~sections/app/Testimonial/TestimonialSection"
import CounterSection from "~sections/marketing/Counter"
import ProcessSection from "~sections/it/Process/ProcessSection"
import FooterOne from "~sections/marketing/FooterOne"
import HeaderButton from "~sections/marketing/Header"
import ContactSection from "~sections/marketing/ContactSection/ContactSection"
const header = {
  headerClasses: "site-header site-header--menu-start light-header site-header--sticky",
  containerFluid: true,
  buttonBlock: (
    <HeaderButton
      className="ms-auto d-none d-xs-inline-flex"
      btnOneText="EN"
      btnTwoText="हि"
      btnThreeText="मराठी"
      mr="15px"
      mrLG="0"
    />
  ),
}

export default function Marketing() {
  return (
    <PageWrapper headerConfig={header}>
      <HeroSection />
      <ServiceSection id="security" />
      <FeatureSection id="features" />
      <TestimonialSection id="doctors" />
      <CounterSection id="whyus" />
      <ProcessSection id="process" />
      <ContactSection id="download" />
      <FooterOne id="footer" />
    </PageWrapper>
  )
}

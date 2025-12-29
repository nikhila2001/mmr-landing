import React from "react";
import { PageWrapper } from "~components/Core";
import TermsConditionSection from "~sections/utility/TermsCondition"
import FooterSection from "~sections/utility/Footer";
import FooterOne from "~sections/marketing/FooterOne"

const header = {
  headerClasses: "site-header site-header--menu-start light-header",
  containerFluid:false,
}

export default function TermsAndConditions() {
  return (
    <PageWrapper innerPage={true}>
        <TermsConditionSection/>
        {/* <FooterSection/> */}
        <FooterOne id="footer" />
        
    </PageWrapper>
  )
}

import React from "react";
import CustomNavbar from "../../../layout/customNavbar/CustomNavbar";
import DesignServices from "./designServices/DesignServices";
import UiImpact from "./UiImpact/UiImpact";
import DesignFlow from "./designFlow/DesignFlow";
import DigitalDesign from "./digitalDesign/DigitalDesign";
import DesignTestimonial from "./designTestimonial/DesignTestimonial";
import FooterLogo from "../../../pages/home/footerLogo/FootersLogo";
import FooterSection from "../../../pages/home/footerSection/FooterSection";

function Design() {
  return (
    <div>
      <CustomNavbar />
      <DesignServices />
      <UiImpact />
      <DesignFlow />
      <DigitalDesign />
      <DesignTestimonial />
      <FooterLogo />
      <FooterSection />
    </div>
  );
}

export default Design;

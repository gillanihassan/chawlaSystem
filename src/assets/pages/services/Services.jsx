import React from "react";
import CustomNavbar from "../../layout/customNavbar/CustomNavbar";
import TopSection from "./topSection/TopSection";
import FootersLogo from "../home/footerLogo/FootersLogo";
import FooterSection from "../home/footerSection/FooterSection";
import DigitalDesign from "./design/digitalDesign/DigitalDesign";

function Services() {
  return (
    <div>
      <CustomNavbar />
      <TopSection />
      <FootersLogo />
      <FooterSection />
      <DigitalDesign />
    </div>
  );
}

export default Services;

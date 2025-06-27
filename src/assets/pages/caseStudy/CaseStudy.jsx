import React from "react";
import CustomNavbar from "../../layout/customNavbar/CustomNavbar";
import StudyCard from "./studyCard/StudyCard";
import FootersLogo from "../../pages/home/footerLogo/FootersLogo";
import FooterSection from "../home/footerSection/FooterSection";

function CaseStudy() {
  return (
    <div>
      <CustomNavbar />
      <StudyCard />
      <FootersLogo />
      <FooterSection />
    </div>
  );
}

export default CaseStudy;

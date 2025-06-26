import React from "react";
import CustomNavbar from "../../layout/customNavbar/CustomNavbar";
import TopSection from "./topSection/TopSection";
import Support from "./support/Support";
import Competition from "./competition/Competition";

function About() {
  return (
    <div>
      <CustomNavbar />
      <TopSection />
      <Support />
      <Competition />
    </div>
  );
}

export default About;

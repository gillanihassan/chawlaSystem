import React from "react";
import CustomNavbar from "../../layout/customNavbar/CustomNavbar";
import TopSection from "./topSection/TopSection";
import Support from "./support/Support";
import Competition from "./competition/Competition";
import FuelingMission from "./fuelingMission/FuelingMission";

function About() {
  return (
    <div>
      <CustomNavbar />
      <TopSection />
      <Support />
      <Competition />
      <FuelingMission />
    </div>
  );
}

export default About;

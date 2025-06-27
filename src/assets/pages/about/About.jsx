import React from "react";
import CustomNavbar from "../../layout/customNavbar/CustomNavbar";
import TopSection from "./topSection/TopSection";
import Support from "./support/Support";
import Competition from "./competition/Competition";
import FuelingMission from "./fuelingMission/FuelingMission";
import Linkdin from "./linkdin/Linkdin";
import TeamSupport from "./teamSupport/TeamSupport";

function About() {
  return (
    <div>
      <CustomNavbar />
      <TopSection />
      <Support />
      <Competition />
      <FuelingMission />
      <Linkdin />
      <TeamSupport />
    </div>
  );
}

export default About;

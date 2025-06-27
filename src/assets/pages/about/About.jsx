import React from "react";
import CustomNavbar from "../../layout/customNavbar/CustomNavbar";
import TopSection from "./topSection/TopSection";
import Support from "./support/Support";
import Competition from "./competition/Competition";
import FuelingMission from "./fuelingMission/FuelingMission";
import Linkdin from "./linkdin/Linkdin";
import TeamSupport from "./teamSupport/TeamSupport";
import FootersLogo from "../home/footerLogo/FootersLogo";
import FooterSection from "../home/footerSection/FooterSection";

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
      <FootersLogo />
      <FooterSection />
    </div>
  );
}

export default About;

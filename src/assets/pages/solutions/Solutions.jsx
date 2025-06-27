import React from "react";
import CustomNavbar from "../../layout/customNavbar/CustomNavbar";
import Header from "./header/Header";
import ItSolutions from "./itSolutions/ItSolutions";
import ChooseUs from "./header/chooseUs/ChooseUs";
import ServiceCard from "./serviceCard/ServiceCard";
import UnlockBusiness from "./unlockBusiness/UnlockBusiness";
import FooterLogo from "../home/footerLogo/FootersLogo";
import FooterSection from "../home/footerSection/FooterSection";

function Solutions() {
  return (
    <div>
      <CustomNavbar />
      <Header />
      <ItSolutions />
      <ChooseUs />
      <ServiceCard />
      <UnlockBusiness />
      <FooterLogo />
      <FooterSection />
    </div>
  );
}

export default Solutions;

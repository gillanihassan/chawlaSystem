import React from "react";
import CustomNavbar from "../../../layout/customNavbar/CustomNavbar";
import HeroSection from "./heroSection/HeroSection";
import ManageService from "./manageService/ManageService";
import BusinessCard from "./businessCard/BusinessCard";
import ContentBlock from "./contentBlock/ContentBlock";
import FeaturesList from "./featuresList/FeaturesList";
import ListTwo from "./listTwo/ListTwo";
import Testimonial from "../../home/testimonial/Testimonial";
import FootersLogo from "../../home/footerLogo/FootersLogo";
import FooterSection from "../../home/footerSection/FooterSection";

function BusinessIntelligence() {
  return (
    <div>
      <CustomNavbar />
      <HeroSection />
      <ManageService />
      <BusinessCard />
      <ContentBlock />
      <FeaturesList />
      <ListTwo />
      <Testimonial />
      <FootersLogo />
      <FooterSection />
    </div>
  );
}

export default BusinessIntelligence;

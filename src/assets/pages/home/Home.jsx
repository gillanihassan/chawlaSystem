import React from "react";
import TopSection from "./topSection/TopSection";
import CustomNavbar from "../../layout/customNavbar/CustomNavbar";
import StatsSection from "./statsSection/StatsSection";
import Simplifying from "./simplifying/Simplifying";
import Features from "./features/Features";
import Card from "./card/CardSection";
import Success from "./success/Success";
import Industry from "./industry/Industry";
import Testimonial from "./testimonial/Testimonial";
import FooterLogo from "./footerLogo/FootersLogo";
import FooterSection from "./footerSection/FooterSection";

function Home() {
  return (
    <div>
      <CustomNavbar />
      <TopSection />
      <StatsSection />
      <Simplifying />
      <Features />
      <Card />
      <Industry />
      <Success />
      <Testimonial />
      <FooterLogo />
      <FooterSection />
    </div>
  );
}

export default Home;

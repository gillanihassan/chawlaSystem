import React from "react";
import TopSection from "./topSection/TopSection";
import CustomNavbar from "../../layout/customNavbar/CustomNavbar";
import StatsSection from "./statsSection/StatsSection";
import Simplifying from "./simplifying/Simplifying";
import Features from "./features/Features";
import Card from "./card/CardSection";

function Home() {
  return (
    <div>
      <CustomNavbar />
      <TopSection />
      <StatsSection />
      <Simplifying />
      <Features />
      <Card />
    </div>
  );
}

export default Home;

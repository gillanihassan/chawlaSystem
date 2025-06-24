import React from "react";
import TopSection from "./topSection/TopSection";
import CustomNavbar from "../../layout/customNavbar/CustomNavbar";
import StatsSection from "./statsSection/StatsSection";
import Simplifying from "./simplifying/Simplifying";

function Home() {
  return (
    <div>
      <CustomNavbar />
      <TopSection />
      <StatsSection />
      <Simplifying />
    </div>
  );
}

export default Home;

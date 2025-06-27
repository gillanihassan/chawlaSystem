import React from "react";
import CustomNavbar from "../../layout/customNavbar/CustomNavbar";
import Header from "./header/Header";
import ItSolutions from "./itSolutions/ItSolutions";
import ChooseUs from "./header/chooseUs/ChooseUs";
import ServiceCard from "./serviceCard/ServiceCard";

function Solutions() {
  return (
    <div>
      <CustomNavbar />
      <Header />
      <ItSolutions />
      <ChooseUs />
      <ServiceCard />
    </div>
  );
}

export default Solutions;

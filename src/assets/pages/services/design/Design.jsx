import React from "react";
import CustomNavbar from "../../../layout/customNavbar/CustomNavbar";
import DesignServices from "./designServices/DesignServices";
import UiImpact from "./UiImpact/UiImpact";
import DesignFlow from "./designFlow/DesignFlow";

function Design() {
  return (
    <div>
      <CustomNavbar />
      <DesignServices />
      <UiImpact />
      <DesignFlow />
    </div>
  );
}

export default Design;

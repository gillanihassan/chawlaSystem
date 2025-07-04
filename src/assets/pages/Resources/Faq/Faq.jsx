import CustomNavbar from "../../../layout/customNavbar/CustomNavbar";
import FootersLogo from "../../home/footerLogo/FootersLogo";
import FooterSection from "../../home/footerSection/FooterSection";
import BusinessFaqs from "./businessFaqs/BusinessFaqs";

function Faq() {
  return (
    <div>
      <CustomNavbar />
      <BusinessFaqs />
      <FootersLogo />
      <FooterSection />
    </div>
  );
}

export default Faq;

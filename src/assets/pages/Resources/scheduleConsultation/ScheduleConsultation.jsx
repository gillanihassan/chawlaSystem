import CustomNavbar from "../../../layout/customNavbar/CustomNavbar";
import ConsultationSection from "./consultationSection/ConsultationSection";
import CustomerSupport from "./customerSupport/CustomerSupport";
import OurLocation from "./ourLocation/OurLocation";
import FooterLogo from "../../../pages/home/footerLogo/FootersLogo";
import FooterSection from "../../../pages/home/footerSection/FooterSection";

function ScheduleConsultation() {
  return (
    <div>
      <CustomNavbar />
      <ConsultationSection />
      <CustomerSupport />
      <OurLocation />
      <FooterLogo />
      <FooterSection />
    </div>
  );
}

export default ScheduleConsultation;

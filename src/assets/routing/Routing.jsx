import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Services from "../pages/services/Services";
import Solutions from "../pages/solutions/Solutions";
import CaseStudy from "../pages/caseStudy/CaseStudy";
import ScheduleConsultation from "../pages/Resources/scheduleConsultation/ScheduleConsultation";
import Design from "../pages/services/design/Design";
import BusinessIntelligence from "../pages/solutions/businessIntelligence/BusinessIntelligence";
import Faq from "../pages/Resources/Faq/Faq";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services-design" element={<Design />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route
          path="/solutions-business-intelligence"
          element={<BusinessIntelligence />}
        />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/consultation" element={<ScheduleConsultation />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </Router>
  );
}

export default Routing;

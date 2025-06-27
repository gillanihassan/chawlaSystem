import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Services from "../pages/services/Services";
import Solutions from "../pages/solutions/Solutions";
import CaseStudy from "../pages/caseStudy/CaseStudy";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/case-study" element={<CaseStudy />} />
      </Routes>
    </Router>
  );
}

export default Routing;

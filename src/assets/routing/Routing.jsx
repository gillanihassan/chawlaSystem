import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default Routing;

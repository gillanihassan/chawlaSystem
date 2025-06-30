import { Col, Image, Row } from "react-bootstrap";
import styles from "./styles.module.css";
import HeroImage from "../../../../pages/services/design/images/designFlow/hero-image.png";

// 🔹 Design steps data
const designSteps = [
  {
    number: "1.",
    title: "Discovery & Research",
    description: "Understand the market, users, and your goals.",
  },
  {
    number: "2.",
    title: "Structure & Strategy",
    description: "Craft user flows and wireframes.",
  },
  {
    number: "3.",
    title: "Design & Prototype",
    description: "Turn ideas into stunning interactive mockups.",
  },
  {
    number: "4.",
    title: "Validate & Iterate",
    description: "Real user feedback, real improvements.",
  },
  {
    number: "5.",
    title: "Launch Ready",
    description: "Pixel perfect, dev-friendly handoff.",
  },
];

function DesignFlow() {
  return (
    <div className={`container-xxl  ${styles.mainDiv}`}>
      <Row className="p-2 ">
        <Col md={7} className="d-flex justify-content-center">
          <Image src={HeroImage} className={styles.customImage} />
        </Col>

        <Col md={5} className="d-flex flex-column justify-content-center">
          <h3 className={`mb-5 ${styles.topHeading}`}>
            From Concept to Clicks: Our Design Journey
          </h3>

          {designSteps.map((step, index) => (
            <p key={index} className={`mb-2 ${styles.para}`}>
              {step.number}
              <span className={styles.paraSpan}>{step.title}</span> –{" "}
              {step.description}
            </p>
          ))}
        </Col>
      </Row>
    </div>
  );
}

export default DesignFlow;

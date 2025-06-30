import { Col, Image, Row } from "react-bootstrap";
import styles from "./styles.module.css";
import HeroImage from "../../../../pages/services/design/images/UiImpact/hero-img.png";

// 🔹 Data for "Why Our UI/UX Design Hits Different"
const reasonsList = [
  {
    title: "Trend-Savvy, User-Centric:",
    description:
      "Our designers breathe the latest trends but never forget who matters most – your users.",
  },
  {
    title: "Purposeful Aesthetics:",
    description:
      "We blend form and function, creating designs that captivate and convert.",
  },
  {
    title: "Collaboration-Driven:",
    description:
      "From wireframe to wow-factor, we co-create with your team every step of the way.",
  },
  {
    title: "Cross-Device Perfection:",
    description:
      "Mobile, tablet, or desktop – flawless UX on every screen size.",
  },
];

// 🔹 Data for "Our UI/UX Toolkit"
const toolkitItems = [
  {
    title: "UX Research & Strategy",
    description: "Understand your users before pixel one.",
  },
  {
    title: "Interaction Design",
    description: "Animations and flows that feel natural and intuitive.",
  },
  {
    title: "Wireframing & Prototyping",
    description: "Blueprints that evolve into brilliance.",
  },
  {
    title: "Usability Testing",
    description: "We don’t guess what works – we prove it.",
  },
  {
    title: "Visual UI Design",
    description: "Interfaces that attract, engage, and retain.",
  },
  {
    title: "Design System Development",
    description: "Consistent, scalable, and easy to maintain.",
  },
];

function UiImpact() {
  return (
    <div className={`container-xxl ${styles.mainDiv}`}>
      <Row className="p-3">
        <Col md={7} className="d-flex flex-column justify-content-center">
          <h3 className={`mb-4 ${styles.topHeading}`}>
            Why Our UI/UX Design Hits Different
          </h3>
          <ul>
            {reasonsList.map((item, index) => (
              <li key={index} className={` ${styles.list}`}>
                <span className={styles.listSpan}>{item.title}</span>{" "}
                {item.description}
              </li>
            ))}
          </ul>

          <h3 className={`mt-4 mb-4 ${styles.headingTwo}`}>
            Our UI/UX Toolkit
          </h3>
          <Row>
            {toolkitItems.map((item, index) => (
              <Col key={index} md={6}>
                <h4 className={styles.headingThree}>{item.title}</h4>
                <p className={styles.para}>{item.description}</p>
              </Col>
            ))}
          </Row>
        </Col>

        <Col md={5} className="d-flex justify-content-center">
          <Image src={HeroImage} className={styles.customImage} />
        </Col>
      </Row>
    </div>
  );
}

export default UiImpact;

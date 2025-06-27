import { Button, Col, Image, Row } from "react-bootstrap";
import HeroImage from "../../../pages/solutions/images/unlock/hero-img.png";
import styles from "./styles.module.css";

// ✅ Dynamic content
const teamSupportContent = {
  heading: "Why choose services from Tecnologia?",
  paragraph: `Tecnologia services provide businesses with an edge over the competition with a variety of benefits. Opting for outsourced IT services improve the efficiency of business and build trust with customers and clients. Our services can be tailored to meet specific needs to match your specific goals.`,
  buttonText: "Get in touch",
  image: HeroImage,
};

function UnlockBusiness() {
  return (
    <div className={`container-xxl p-3 mt-5 ${styles.mainDiv}`}>
      <Row>
        <Col
          md={6}
          className="px-3 py-5 d-flex flex-column justify-content-center"
        >
          <div>
            <h2 className={styles.topHeading}>{teamSupportContent.heading}</h2>
            <p className={`mt-4 ${styles.para}`}>
              {teamSupportContent.paragraph}
            </p>
            <Button className={`mt-4 p-2 ${styles.btn}`}>
              {teamSupportContent.buttonText}
            </Button>
          </div>
        </Col>
        <Col md={6} className="d-flex justify-content-center p-3">
          <Image
            src={teamSupportContent.image}
            className={styles.customImage}
          />
        </Col>
      </Row>
    </div>
  );
}

export default UnlockBusiness;

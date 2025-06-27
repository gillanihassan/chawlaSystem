import { Button, Col, Image, Row } from "react-bootstrap";
import HeroImage from "../../../pages/about/images/teamSupport/hero-image.png";
import styles from "./styles.module.css";

// ✅ Dynamic content
const teamSupportContent = {
  heading: "Our Team Is Here to Support Your Team",
  paragraph: `With decades of IT experience, our technicians, engineers,
  business consultants, help-desk professionals and account managers
  focus on your business and how we can help you achieve business
  success. With Tecnologia, you’ll have the personal touch and
  expertise of our team at your service. Contact us today for an
  initial consultation to learn how we can address your greatest IT
  needs.`,
  buttonText: "Get in touch",
  image: HeroImage,
};

function TeamSupport() {
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

export default TeamSupport;

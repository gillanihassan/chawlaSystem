import { Button, Col, Image, Row } from "react-bootstrap";
import styles from "./styles.module.css";
import HeroImage from "../../../../pages/Resources/scheduleConsultation/images/hero-image.png";

function CustomerSupport() {
  return (
    <div className={`container-xxl ${styles.mainDiv}`}>
      <h2 className={`text-center ${styles.topHeading}`}>We’re here to help</h2>
      <Row className="p-3 d-flex justify-content-center align-items-center">
        <Col md={3} className="d-flex justify-content-center">
          <p className={`${styles.para}`}>
            Call us at: <br /> +1 (914) 369-3435
          </p>
        </Col>
        <Col md={3} className="d-flex justify-content-center">
          <p className={`${styles.para}`}>
            Email us: <br /> hello@azk.ai
          </p>
        </Col>
        <div className="d-flex justify-content-center">
          <Button className={`px-4 py-2 mt-3 ${styles.btn}`}>
            Schedule a free consultation
          </Button>
        </div>
      </Row>
      <div className="p-3 d-flex justify-content-center">
        <Image src={HeroImage} className={`${styles.customImage}`} />
      </div>
    </div>
  );
}

export default CustomerSupport;

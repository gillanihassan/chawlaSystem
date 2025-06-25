import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./styles.module.css";
import GoogleLogo from "../../../pages/home/images/footerSection/google-logo.svg";
import IconOne from "../../../pages/home/images/footerSection/icon-one.png";
import IconTwo from "../../../pages/home/images/footerSection/icon-two.png";
import IconThree from "../../../pages/home/images/footerSection/icon-three.png";

const FooterSection = () => {
  return (
    <div className={`container-xxl mt-5 ${styles.mainContainer}`}>
      <Row className="align-items-center mt-3">
        <Col md={8} className="text-center text-md-left">
          <Row>
            <Col
              md={4}
              className="d-flex justify-content-center align-items-center"
            >
              <Image src={GoogleLogo} alt="Logo" />
              <div className="text-start mx-3">
                <div className={`${styles.stars}`}>★★★★★</div>
                <p className={`${styles.firstPara}`}>Customer Reviews</p>
              </div>
            </Col>
            <Col
              md={4}
              className="d-flex justify-content-center align-items-center"
            >
              <p className={` ${styles.para}`}>
                123 New Address,
                <br />
                Ste 200, New City,
                <br />
                NY 12345
              </p>
            </Col>
            <Col
              md={4}
              className="d-flex justify-content-center align-items-center"
            >
              <p className={` ${styles.para}`}>
                T: +1 (914) 369-3435
                <br />
                E: hello@azk.ai
              </p>
            </Col>
          </Row>
        </Col>

        <Col md={4} className=" d-flex justify-content-around">
          <Image src={IconOne} alt="LinkedIn" />
          <Image src={IconTwo} alt="LinkedIn" />
          <Image src={IconThree} alt="LinkedIn" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-3">
          <p className={`${styles.bottomPara}`}>
            © 2025 Your Company. All rights reserved. |{" "}
            <a href="/terms" className={`${styles.bottomParaLink}`}>
              Terms & Conditions
            </a>
            <a href="/privacy" className={`${styles.bottomParaLink}`}>
              Privacy Policy
            </a>
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default FooterSection;

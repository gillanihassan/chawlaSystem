import { Card, Button, Row, Col, Image } from "react-bootstrap";
import styles from "./styles.module.css";
import UserOne from "../../../pages/home/images/testimonial/user-one.png";
import GoogleLogo from "../../../pages/home/images/testimonial/google-logo.svg";

const Testimonial = () => {
  return (
    <div className="container-xxl mt-4 p-3">
      <Row className="d-flex flex-column justify-content-center align-items-center">
        <Col xxl={8}>
          <Card
            style={{
              backgroundColor: "#000000",
              color: "#fff",
              border: "none",
              textAlign: "left",
              padding: "20px",
            }}
          >
            <Card.Body>
              <Card.Img
                src={UserOne}
                alt="User"
                className={`${styles.customImage}`}
              />
              <Card.Text className={`mt-3 ${styles.cardText}`}>
                I've ordered several times. Great attention to detail, delivers
                on time each time. AZK AI comes highly recommended!
              </Card.Text>
              <Card.Text style={{ fontSize: "14px", color: "#ccc" }}>
                Gateriki Kinuthia
              </Card.Text>

              <Row className="d-flex justify-content-center align-items-center">
                <Col md={6}>
                  <Button className={` ${styles.btnOne}`}>←</Button>
                  <Button className={`mx-3 ${styles.btnOne}`}>→</Button>
                </Col>
                <Col md={6} className="d-flex">
                  <Image src={GoogleLogo} alt="Logo" />
                  <div className="text-start mx-3">
                    <div className={`${styles.stars}`}>★★★★★</div>
                    <p>Customer Reviews</p>
                  </div>
                </Col>
              </Row>

              <div></div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Testimonial;

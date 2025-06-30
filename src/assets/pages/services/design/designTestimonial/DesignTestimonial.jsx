import { Card, Button, Row, Col, Image } from "react-bootstrap";
import styles from "./styles.module.css";
import UserOne from "../../../../pages/services/design/images/testimonial/user-one.png";
import GoogleLogo from "../../../pages/../services/design/images/testimonial/google-logo.svg";

// 🔹 Testimonial Data Array
const testimonials = [
  {
    userImage: UserOne,
    quote:
      "I've ordered several times. Great attention to detail, delivers on time each time. AZK AI comes highly recommended!",
    name: "Gateriki Kinuthia",
    rating: "★★★★★",
    logo: GoogleLogo,
    source: "Customer Reviews",
  },
  // Future testimonials can be added here
];

const DesignTestimonial = () => {
  return (
    <div className="container-xxl mt-4 p-3">
      <Row className="d-flex flex-column justify-content-center align-items-center">
        <Col xxl={8}>
          {testimonials.map((item, index) => (
            <Card
              key={index}
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
                  src={item.userImage}
                  alt="User"
                  className={styles.customImage}
                />
                <Card.Text className={`mt-3 ${styles.cardText}`}>
                  {item.quote}
                </Card.Text>
                <Card.Text style={{ fontSize: "14px", color: "#ccc" }}>
                  {item.name}
                </Card.Text>

                <Row className="d-flex justify-content-center align-items-center">
                  <Col md={6}>
                    <Button className={styles.btnOne}>←</Button>
                    <Button className={`mx-3 ${styles.btnOne}`}>→</Button>
                  </Col>
                  <Col md={6} className="d-flex">
                    <Image src={item.logo} alt="Logo" />
                    <div className="text-start mx-3">
                      <div className={styles.stars}>{item.rating}</div>
                      <p>{item.source}</p>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default DesignTestimonial;

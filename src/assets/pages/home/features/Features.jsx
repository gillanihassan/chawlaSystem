import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "./styles.module.css";
import iconOne from "../../../pages/home/images/features/icon-one.svg";
import iconTwo from "../../../pages/home/images/features/icon-two.svg";
import iconThree from "../../../pages/home/images/features/icon-three.svg";

// 🔹 Data Array
const featureData = [
  {
    title: "Innovative Technology",
    text: "We stay up-to-date with the latest technology trends and offer innovative solutions that help you stay ahead of the competition.",
    icon: iconOne,
  },
  {
    title: "Cost-effectiveness",
    text: "We offer affordable IT solutions that help you reduce costs and improve your bottom line.",
    icon: iconTwo,
  },
  {
    title: "Industry Expertise​",
    text: "We specialize in serving specific industries, such as healthcare, finance, or manufacturing, and offer tailored solutions that meet your unique needs.",
    icon: iconThree,
  },
];

const Features = () => {
  return (
    <div fluid className={`container-xxl p-3 ${styles.featuresContainer}`}>
      <Row>
        {featureData.map((feature, index) => (
          <Col
            key={index}
            md={4}
            className="d-flex justify-content-center align-items-center my-2"
          >
            <Card
              style={{ width: "28rem" }}
              className={`d-flex justify-content-center align-items-center p-3 ${styles.featureCard}`}
            >
              <Card.Img
                variant="top"
                src={feature.icon}
                alt={feature.title}
                className={`${styles.featureIcon} ${
                  index === 1 ? styles.smallIcon : ""
                }`}
              />
              <Card.Body>
                <Card.Title className={`text-center ${styles.title}`}>
                  {feature.title}
                </Card.Title>
                <Card.Text className={`text-center ${styles.text}`}>
                  {feature.text}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Features;

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import styles from "./styles.module.css";
import iconOne from "../../../pages/home/images/features/icon-one.svg";
import iconThree from "../../../pages/home/images/features/icon-three.svg";

// 🔹 Data Array
const featureData = [
  {
    title: "Managed Services",
    text: "Free up your internal resources to focus on the business by letting us handle day to day support services, management, and monitoring of your IT.",
    icon: iconOne,
  },
  {
    title: "IT Consulting & Advisory",
    text: "The right technology, implemented properly, appropriately managed and monitored, can lead to significant gains in growth",
    icon: iconThree,
  },
  {
    title: "Cyber Security​",
    text: "Our experts can identify vulnerabilities, assess risks, and implement robust security measures to safeguard your systems and data.",
    icon: iconOne,
  },
  {
    title: "Web Development​",
    text: "Our web development services can help you establish an impactful online presence and reach your target audience effectively.",
    icon: iconThree,
  },
  {
    title: "Mobile Development​",
    text: "We can help you create a customized mobile app that aligns with your brand and goals, with expertise in various mobile platforms.",
    icon: iconOne,
  },
  {
    title: "Cloud Services​",
    text: "With our expertise in cloud technologies, we can help you find the right cloud solutions that meet your business needs and goals.",
    icon: iconThree,
  },
];

const CardSection = () => {
  return (
    <div fluid className={`container-xxl ${styles.featuresContainer}`}>
      <Button className="mb-3">How We Do</Button>
      <h3 className={`${styles.topHeading}`}>Solutions</h3>
      <Row>
        {featureData.map((feature, index) => (
          <Col
            key={index}
            md={4}
            className="d-flex justify-content-center align-items-center my-2"
          >
            <Card
              style={{ width: "28rem" }}
              className={` p-3 ${styles.featureCard}`}
            >
              <Card.Img
                variant="top"
                src={feature.icon}
                alt={feature.title}
                className={styles.featureIcon}
              />
              <Card.Body>
                <Card.Title className={`${styles.title}`}>
                  {feature.title}
                </Card.Title>
                <Card.Text className={`${styles.text}`}>
                  {feature.text}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-5">
        <Button className="mb-3">View All Solutions</Button>
      </div>
    </div>
  );
};

export default CardSection;

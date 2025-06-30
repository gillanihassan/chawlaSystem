import { Container, Row, Col, Card, Button } from "react-bootstrap";
import styles from "./styles.module.css";

// 🔹 Data Array for each digital experience
const digitalExperienceData = [
  {
    title: "SaaS Platforms",
    text: "In SaaS, great design isn’t a luxury – it’s a growth driver. At AZK AI, we create intuitive, scalable, and user-centric UI/UX designs that reduce friction, boost engagement, and turn users into loyal customers.",
  },
  {
    title: "HealthCare",
    text: "Healthcare design demands clarity, empathy, and compliance. At AZK AI, we create intuitive, patient-centered UI/UX experiences that simplify complex workflows, reduce friction, and build trust between providers and patients.",
  },
  {
    title: "Education",
    text: "Great learning starts with great design. AZK AI crafts engaging, intuitive, and accessible UI/UX experiences for Education platforms that enhance both teaching and learning.",
  },
  {
    title: "eCommerce",
    text: "In eCommerce, every click counts. AZK AI crafts visually stunning, conversion-focused UI/UX designs that turn browsers into buyers and keep customers coming back.",
  },
  {
    title: "Fintech",
    text: "In fintech, trust is built through design. AZK AI creates sleek, secure, and user-friendly interfaces that simplify financial workflows, visualize complex data, and deliver a seamless experience across every screen.",
  },
  {
    title: "Real Estate",
    text: "In real estate, first impressions happen online. AZK AI designs intuitive, visually stunning interfaces that help users explore, compare, and connect with properties effortlessly.",
  },
];

const DigitalDesign = () => {
  return (
    <div fluid className={`container-xxl p-3 ${styles.featuresContainer}`}>
      <h3 className={`mb-0 ${styles.topHeading}`}>
        Designing for Every Digital Experience
      </h3>
      <p className={`mb-0 ${styles.para}`}>
        From fintech dashboards to eCommerce apps, we’ve helped startups,
        enterprises, and everything in between delight their users:
      </p>

      <Row className="mt-5">
        {digitalExperienceData.map((item, index) => (
          <Col
            key={index}
            md={4}
            className="d-flex justify-content-center align-items-center my-2"
          >
            <Card style={{ width: "28rem" }} className={styles.featureCard}>
              <Card.Body>
                <Card.Title className={styles.title}>{item.title}</Card.Title>
                <Card.Text className={styles.text}>{item.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default DigitalDesign;

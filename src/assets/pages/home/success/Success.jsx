import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./styles.module.css";
import ImageOne from "../../../pages/home/images/success/img-one.png";
import ImageTwo from "../../../pages/home/images/success/img-two.png";
import ImageThree from "../../../pages/home/images/success/img-three.png";
import { Col, Row } from "react-bootstrap";

function Success() {
  const cardData = [
    {
      id: 1,
      image: ImageOne,
      topPara: "Cloud Hosting",
      title:
        "Major Insurance Provider Saves $750k per Month With Big Data Migration",
      text: "The company needed to complete a complex migration on a tight deadline to avoid millions of dollars in post-contract fees and fines.",
      tags: ["Modern infrastructure", "Consulting services"],
    },
    {
      id: 2,
      image: ImageTwo,
      topPara: "IT Consulting",
      title:
        "Maximizing Efficiency with Proper Technology Implementation – Coffee Success Story",
      text: "The company needed to complete a complex migration on a tight deadline to avoid millions of dollars in post-contract fees and fines.",
      tags: ["Modern infrastructure", "Consulting services"],
    },
    {
      id: 3,
      image: ImageThree,
      topPara: "Mobile development",
      title:
        "Strategic Move to an AI-supported application for Public Safety Travel App in London",
      text: "Travel confidently around London with maps and live travel updates. Our reliable journey planner will map a safe route.",
      tags: ["Modern infrastructure", "Consulting services"],
    },
  ];

  return (
    <div className="container-xxl mt-4">
      <Button className={`${styles.btn}`}>Where WE DO</Button>
      <h3 className={`mt-3 ${styles.topHeading}`}>Success Stories</h3>
      <Row className="mt-5">
        {cardData.map((feature) => (
          <Col
            md={4}
            key={feature.id}
            className="d-flex justify-content-center align-items-center"
          >
            <Card
              style={{
                width: "26rem",
                backgroundColor: "#000000",
              }}
            >
              <Card.Img
                src={feature.image}
                className={`${styles.customImage}`}
              />
              <Card.Body>
                <p className={styles.topPara}>{feature.topPara}</p>
                <Card.Title className={styles.cardHeading}>
                  {feature.title}
                </Card.Title>
                <Card.Text className={`mt-3 ${styles.cardText}`}>
                  {feature.text}
                </Card.Text>
                {feature.tags.map((tag, idx) => (
                  <p
                    key={idx}
                    className={`${styles.paraOne} ${idx === 0 ? "mb-0" : ""}`}
                  >
                    {tag}
                  </p>
                ))}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Success;

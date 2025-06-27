import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./styles.module.css";
import ImageOne from "../../../pages/caseStudy/images/studyCard/img-one.png";
import ImageTwo from "../../../pages/caseStudy/images/studyCard/img-two.png";
import ImageThree from "../../../pages/caseStudy/images/studyCard/img-three.png";
import ImageFour from "../../../pages/caseStudy/images/studyCard/img-four.png";
import ImageFive from "../../../pages/caseStudy/images/studyCard/img-five.png";
import ImageSix from "../../../pages/caseStudy/images/studyCard/img-six.png";
import ImageSeven from "../../../pages/caseStudy/images/studyCard/img-seven.png";
import ImageEight from "../../../pages/caseStudy/images/studyCard/img-eight.png";
import ImageNine from "../../../pages/caseStudy/images/studyCard/img-nine.png";
import { Col, Row } from "react-bootstrap";

function StudyCard() {
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
    {
      id: 4,
      image: ImageFour,
      topPara: "App develoment",
      title: "Convenience, savings, and rewards at your fingertips",
      text: "Paysafe’s fast-paced expansion had resulted in a lack of process consistency & standardisation across their acquired brands.",
      tags: ["Digital transformation", "Consulting services"],
    },
    {
      id: 5,
      image: ImageFive,
      topPara: "App develoment",
      title: "Private trust management and trading platform",
      text: "The company needed to complete a complex migration on a tight deadline to avoid millions of dollars in post-contract fees and fines.",
      tags: ["Modern infrastructure", "Consulting services"],
    },
    {
      id: 6,
      image: ImageSix,
      topPara: "App develoment",
      title: "Online platform for distance learning",
      text: "Travel confidently around London with maps and live travel updates. Our reliable journey planner will map a safe route.",
      tags: ["Modern infrastructure", "Consulting services"],
    },
    {
      id: 7,
      image: ImageSeven,
      topPara: "Digital transformation",
      title:
        "Delivering enterprise-wide efficiencies at Paysafe through Intelligent Automation",
      text: "Paysafe’s fast-paced expansion had resulted in a lack of process consistency & standardisation across their acquired brands.",
      tags: ["Digital transformation", " International growth"],
    },
    {
      id: 8,
      image: ImageEight,
      topPara: "IT Consulting",
      title:
        "Bringing premium live casino experiences to gamers across the globe",
      text: "Authentic first partnered with Tecnologia January 2021, following their referral from another of our clients in the iGaming industry.",
      tags: ["Digital transformation", " iGaming"],
    },
    {
      id: 9,
      image: ImageNine,
      topPara: "Cyber Security",
      title:
        "Building, optimising, and future-proofing existing infrastructures with payment gateways",
      text: "Core to growing a gaming company is a robust payments infrastructure.",
      tags: ["Cyber Security", "  Consulting services"],
    },
  ];

  return (
    <div className="container-xxl mt-4">
      <Button className={`${styles.btn}`}>Where WE DO</Button>
      <h3 className={`mt-3 text-center ${styles.topHeading}`}>
        Success Stories
      </h3>
      <Row className="mt-5 gy-5">
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

export default StudyCard;

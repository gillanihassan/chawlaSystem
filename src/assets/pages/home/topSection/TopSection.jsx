import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import HeroImage from "../../../pages/home/images/topSection/hero-img.png";
import styles from "./styles.module.css";

const topSectionData = [
  {
    heading: "We manage your IT, so you can manage your business.",
    paragraph:
      "Take charge of your business continuity with innovative IT solutions",
    buttons: [
      { label: "Schedule a Free Consultation", class: styles.btnOne },
      { label: "Services", class: styles.btnTwo },
    ],
    image: HeroImage,
  },
];

function TopSection() {
  return (
    <div className={`container-xxl ${styles.mainDiv}`}>
      {topSectionData.map((item, index) => (
        <Row key={index}>
          <Col md={6} className="d-flex flex-column justify-content-center">
            <h2 className={`${styles.topHeading}`}>{item.heading}</h2>
            <p className={`mt-4 ${styles.topPara}`}>{item.paragraph}</p>
            <div className="mt-4">
              {item.buttons.map((btn, i) => (
                <Button
                  key={i}
                  className={`${i !== 0 ? "mx-3" : ""} ${btn.class}`}
                >
                  {btn.label}
                </Button>
              ))}
            </div>
          </Col>
          <Col md={6}>
            <Image src={item.image} className={styles.customImage} />
          </Col>
        </Row>
      ))}
    </div>
  );
}

export default TopSection;

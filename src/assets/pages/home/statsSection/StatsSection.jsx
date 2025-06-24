import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./styles.module.css";
import GoogleLogo from "../../../pages/home/images/stats/google-logo.svg";

// Step 1: Data array
const statsData = [
  {
    type: "logo",
    image: GoogleLogo,
    stars: "★★★★★",
    text: "Customer Reviews",
  },
  {
    heading: "20 Years",
    subText: "Proven Track Record",
  },
  {
    heading: "98%",
    subText: "Customer Satisfaction",
  },
  {
    heading: "1,500 Projects",
    subText: "We Have Completed",
  },
  {
    heading: "3 Mins",
    subText: "Average Answer Time",
  },
];

const StatsSection = () => {
  return (
    <div className={`container-xxl ${styles.mainDiv}`}>
      <Row className="text-center py-3 d-flex justify-content-center">
        {statsData.map((item, index) => (
          <Col
            key={index}
            className={
              item.type === "logo" ? "d-flex justify-start" : "text-start"
            }
            sm={6}
            md={item.type === "logo" ? 3 : 2}
          >
            {item.type === "logo" ? (
              <>
                <Image src={item.image} alt="Logo" className="logo" />
                <div className="text-start mx-3">
                  <div className={`${styles.stars}`}>{item.stars}</div>
                  <p>{item.text}</p>
                </div>
              </>
            ) : (
              <>
                <h5 className={`mb-0 ${styles.topHeading}`}>{item.heading}</h5>
                <p className={`${styles.para}`}>{item.subText}</p>
              </>
            )}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default StatsSection;

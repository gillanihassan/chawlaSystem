import { Row, Col, Accordion } from "react-bootstrap";
import styles from "./styles.module.css";

// ✅ Dynamic data object
const content = {
  heading: "Benefits of Managed IT Services by AZK AI",
  paragraphs: [
    "At AZK AI, we empower businesses with cutting-edge Business Intelligence solutions that transform raw data into real-time, actionable insights. Our expert data scientists and analysts leverage advanced tools — like a finely-tuned Power BI setup — to unify scattered data across your organization into a cohesive, strategic asset.",
    "Here's what you can expect from our BI solutions:",
  ],
  tableOfContents: [
    "Benefits of Managed IT Services by AZK AI",
    "Tailored BI Strategy",
    "Data Visualization & Reporting",
    "Custom BI Dashboards – Powered by AZK AI",
    "Predictive Modeling by AZK AI",
    "Data Warehousing Solutions – Delivered by AZK AI",
    "Business Intelligence Best Practices – The AZK AI Advantage",
    "Frequently Asked Questions",
    "What clients say about our Managed IT Services",
  ],
};

const ManageService = () => {
  return (
    <div className={`container-xxl mt-5 ${styles.mainContainer}`}>
      <Row className="p-3">
        <Col md={8}>
          <h2 className={styles.topHeading}>{content.heading}</h2>

          {content.paragraphs.map((para, index) => (
            <p key={index} className={`mt-4 ${styles.para}`}>
              {para}
            </p>
          ))}
        </Col>

        <Col md={4}>
          <Accordion defaultActiveKey="0" className={styles.customAccordion}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Table of Contents</Accordion.Header>
              <Accordion.Body className={styles.accBody}>
                {content.tableOfContents.map((item, index) => (
                  <p key={index} className="mb-1">
                    <a href="#" className={styles.link}>
                      {item}
                    </a>
                  </p>
                ))}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </div>
  );
};

export default ManageService;

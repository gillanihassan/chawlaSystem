import React, { useState } from "react";
import { Row, Col, Accordion, useAccordionButton, Card } from "react-bootstrap";
import styles from "./styles.module.css";

// 🔹 Accordion data array
const accordionItems = [
  {
    key: "0",
    title: "Real-Time Data Capture – Powered by AZK AI",
    body: "Ensure fast, accurate, and consistent data flow with AZK AI’s real-time data capture solutions. Using advanced technologies like Apache Kafka, we collect and stream data from multiple sources across your organization – enabling immediate insights and smarter, faster decision-making.",
  },
  {
    key: "1",
    title: "Data Integration & Cleansing – By AZK AI",
    body: "AZK AI leverages powerful tools like Trifacta and OpenRefine to seamlessly integrate and cleanse your business data. Our team ensures ongoing data quality by eliminating inconsistencies, removing duplicates, and optimizing your data warehouse for maximum efficiency and accuracy – laying the groundwork for reliable analytics and smarter business decisions.",
  },
  {
    key: "2",
    title: "Data Auditing – Secured by AZK AI",
    body: "Maintain accuracy, consistency, and trust in your data with AZK AI’s proactive data auditing solutions. Utilizing advanced BI tools like Talend, our experts perform regular audits to ensure the integrity of your data – so every decision you make is backed by reliable, high-quality information.",
  },
  {
    key: "3",
    title: "Selecting the Right Tech Stack – Guided by AZK AI",
    body: "Choosing the right technology stack is critical to the success of any data project. At AZK AI, we tailor tech solutions to your specific business needs – whether it’s leveraging Tableau for advanced data visualization or using Python and R for data science and mining tasks. Our experts provide access to a diverse range of libraries and frameworks to ensure your BI environment is both powerful and future-ready.",
  },
  {
    key: "4",
    title: "Avoiding Biases in Data Mining – Ensured by AZK AI",
    body: "At AZK AI, we prioritize fairness and accuracy in every machine learning model. By using diverse, representative training datasets and leveraging powerful libraries like TensorFlow and Scikit-learn, we minimize bias and ensure that the insights you gain are objective, balanced, and trustworthy.",
  },
  {
    key: "5",
    title: "Feedback-Driven Continuous Improvement – Enabled by AZK AI",
    body: "To keep your BI system aligned with evolving business needs, AZK AI integrates continuous feedback loops into every solution. Through user-friendly feedback forms and monitoring tools, we gather valuable input that drives iterative enhancements – ensuring your BI platform stays relevant, effective, and user-focused.",
  },
  {
    key: "6",
    title: "Single Sign-On (SSO) Integration – Simplified by AZK AI",
    body: "AZK AI streamlines access to your BI tools by integrating Single Sign-On (SSO) systems. With SSO, users need just one set of credentials to securely access multiple platforms – including your BI environment. This not only simplifies the login experience but also enhances security by minimizing the risk of unauthorized access.",
  },
];

// ✅ Custom Toggle Component (unchanged)
const CustomToggle = ({ children, eventKey, isActive, onClick }) => {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    onClick(eventKey)
  );

  return (
    <div
      onClick={decoratedOnClick}
      className={`d-flex align-items-center p-3 ${
        isActive ? styles.activeHeader : styles.inactiveHeader
      }`}
      style={{ cursor: "pointer" }}
    >
      <span
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "white",
          marginRight: "1rem",
        }}
      >
        {isActive ? "−" : "+"}
      </span>
      <span>{children}</span>
    </div>
  );
};

// ✅ Final Dynamic Component
const FeaturesList = () => {
  const [activeKey, setActiveKey] = useState("1");

  return (
    <div
      className={`container-xxl text-white py-0 mb-0  mt-5 ${styles.mainContainer}`}
    >
      <Row>
        <Col xl={8} xxl={8}>
          <Accordion activeKey={activeKey}>
            {accordionItems.map((item) => (
              <Card
                key={item.key}
                className={`mb-0 ${
                  activeKey === item.key
                    ? styles.activeCard
                    : styles.inactiveCard
                }`}
              >
                <CustomToggle
                  eventKey={item.key}
                  isActive={activeKey === item.key}
                  onClick={(key) =>
                    setActiveKey(activeKey === key ? null : key)
                  }
                >
                  <h4 className={`mx-3 ${styles.title}`}>{item.title}</h4>
                </CustomToggle>
                <Accordion.Collapse eventKey={item.key}>
                  <Card.Body className="px-4 py-0">
                    <span className={styles.body}>{item.body}</span>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            ))}
          </Accordion>
        </Col>
      </Row>
    </div>
  );
};

export default FeaturesList;

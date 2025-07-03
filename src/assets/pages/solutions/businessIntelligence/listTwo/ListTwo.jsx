import { Row, Col, Accordion, useAccordionButton, Card } from "react-bootstrap";
import styles from "./styles.module.css";
import { useState } from "react";

// 🔹 Accordion data array
const accordionItems = [
  {
    key: "0",
    title:
      "What are the key components of a robust BI solution tailored to our specific needs?",
    body: "A comprehensive BI solution includes several essential components, all tailored to your unique business requirements:",
  },
  {
    key: "1",
    title:
      "Can BI services be integrated with our existing IT infrastructure without disrupting operations?",
    body: "Absolutely. Modern BI solutions are built for seamless integration with your current IT environment. They can easily connect to a wide range of data sources – including databases, cloud platforms, and legacy systems – without causing operational disruptions. At AZK AI, we collaborate closely with your IT team to ensure a smooth, efficient integration process that keeps your business running uninterrupted.",
  },
  {
    key: "2",
    title:
      "What specific benefits can we expect from investing in a BI solution?",
    body: "Investing in a Business Intelligence solution with AZK AI brings measurable value across your organization:",
  },
  {
    key: "3",
    title:
      "How does data quality impact the accuracy and reliability of our BI reports and analytics?",
    body: "Data quality is critical to the success of any BI initiative. Inaccurate, incomplete, or inconsistent data can lead to misleading reports, flawed insights, and poor decision-making. It also wastes valuable resources by complicating data processing and analysis. Most importantly, low data quality can erode trust in your BI system – making stakeholders hesitant to rely on data-driven decisions. High-quality data ensures your analytics are accurate, actionable, and trusted.",
  },
  {
    key: "4",
    title:
      "How can BI technology empower our organization to make more informed and strategic decisions?",
    body: "Data quality is critical to the success of any BI initiative. Inaccurate, incomplete, or inconsistent data can lead to misleading reports, flawed insights, and poor decision-making. It also wastes valuable resources by complicating data processing and analysis. Most importantly, low data quality can erode trust in your BI system – making stakeholders hesitant to rely on data-driven decisions. High-quality data ensures your analytics are accurate, actionable, and trusted.",
  },
  {
    key: "5",
    title:
      "How can BI services enhance our customer experience through data analysis?",
    body: "BI technology enables smarter, faster, and more strategic decision-making by delivering real-time insights and uncovering valuable trends and patterns. By continuously monitoring key performance indicators (KPIs), your team can respond quickly to changes and make data-backed decisions. BI also fosters collaboration by making insights easily shareable across departments – encouraging informed discussions, aligning strategies, and driving business growth through a truly data-driven culture.",
  },
  {
    key: "6",
    title:
      "How can BI services help us identify potential risks and opportunities?",
    body: "BI services empower you to spot risks and seize opportunities through advanced data analysis. By continuously monitoring key metrics and leveraging predictive analytics, you can detect anomalies, uncover trends, and identify patterns early. This proactive approach allows you to mitigate potential issues before they escalate and strategically capitalize on new growth opportunities as they emerge.",
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
const ListTwo = () => {
  const [activeKey, setActiveKey] = useState("1");

  return (
    <div
      className={`container-xxl text-white py-0 mb-0   ${styles.mainContainer}`}
    >
      <h2 className={`mb-4 ${styles.topHeading}`}>
        Frequently Asked Questions
      </h2>
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

export default ListTwo;

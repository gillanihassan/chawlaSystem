import { Row, Col, Accordion, useAccordionButton, Card } from "react-bootstrap";
import styles from "./styles.module.css";
import { useState } from "react";

// 🔹 FAQ Data Array
const faqItems = [
  {
    key: "0",
    question: "What are your two primary services?",
    answers: [
      "Fully Managed IT Services – Tecnologia monitors, manages, supports, and secures all IT systems and users for a fixed and predictable monthly fee.",
      "Co-Managed IT Services– We support internal IT as an extension of your team. This role includes patching, repetitive tasks, one-off services, and special projects. We handle the backend while in-house IT manages everything else.",
    ],
  },
  {
    key: "1",
    question: "What other services do you offer?",
    answers: [
      "Cybersecurity",
      "IT Consulting",
      "Cloud Services",
      "Network Connectivity (ISP Services)",
    ],
  },
  {
    key: "2",
    question: "What business problems do you solve?",
    answers: [
      "By leading with IT strategy and compliance guidance, Tecnologia fills two major gaps in the IT provider industry. This expertise helps clients:",
      {
        type: "list",
        items: [
          "Save time, money, and increase profitability.",
          "Reduce employee frustration and improve team morale.",
          "Solidify defenses against data breaches, ransomware attacks, and legal exposure.",
          "Lower cybersecurity and compliance risk",
        ],
      },
    ],
  },
  {
    key: "3",
    question: "What are your core services?",
    answers: [
      "Core Services are fixed, baseline foundational resources included in every Fully Managed IT Service Level Agreement.",
      {
        type: "list",
        items: [
          "vCIO – Strategic direction, budgeting, planning, and consulting services...",
          "Client Management Tools – Professional Services Automation, Ticketing, CRM, ...",
          "Vendor Technical Assistance – We interact directly with your other technology vendors...",
          "We will also answer basic questions about your environment...",
          "This assistance covers hardware manufacturers, software development firms, etc.",
          "Procurement Services – Tecnologia sources products exclusively from authorized channels...",
        ],
      },
      "If a client has more than one location – with expanded Network Management & Vendor Technical Assistance requirements – additional Core Services charges will apply.",
    ],
  },
  {
    key: "4",
    question: "How are you different?",
    answers: [
      "Tecnologia selectively partners with growing organizations...",
      "Tecnologia creates and maintains powerful, quiet, and secure IT systems...",
      "Most Tecnologia locations limit new client onboardings to two per month...",
    ],
  },
  {
    key: "5",
    question: "How do you maximize responsiveness?",
    answers: [
      "Tecnologia is responsive by design...",
      "This alignment allows clients to enjoy business optimizing technology...",
      "We give users direct access to support...",
      "Our Service Level Agreement prioritizes client matters and response times by P1 to P4...",
      "Assisting with a password reset is a P4...",
      "The outcome is similar to the concept of compound interest...",
    ],
  },
  {
    key: "6",
    question: "What is your industry focus?",
    answers: [
      "Operationally mature organizations in the following verticals:",
      {
        type: "list",
        items: [
          "Professional",
          "ServicesCPA",
          "Legal",
          "Finance",
          "Insurance",
          "Real Estate",
          "Manufacturing",
          "Healthcare",
          "Nonprofit",
        ],
      },
    ],
  },
];

// ✅ Custom Toggle with styled round icon on right
const CustomToggle = ({ children, eventKey, isActive, onClick }) => {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    onClick(eventKey)
  );

  return (
    <div
      onClick={decoratedOnClick}
      className={`d-flex justify-content-between align-items-center p-3 ${
        isActive ? styles.activeHeader : styles.inactiveHeader
      }`}
      style={{ cursor: "pointer" }}
    >
      <span className="flex-grow-1">{children}</span>
      <span
        style={{
          fontSize: "1.2rem",
          fontWeight: "bold",
          color: "black",
          backgroundColor: "white",
          borderRadius: "50%",
          width: "32px",
          height: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isActive ? "−" : "+"}
      </span>
    </div>
  );
};

// ✅ Main Dynamic Component
const BusinessFaqs = () => {
  const [activeKey, setActiveKey] = useState("0");

  return (
    <div className={`container-xxl text-white py-0  ${styles.mainContainer}`}>
      <div className="d-flex justify-content-center">
        <h2 className={`mb-4 text-center ${styles.topHeading}`}>
          Frequently Asked Questions
        </h2>
      </div>
      <Row className="mt-5">
        <Col>
          <Accordion activeKey={activeKey}>
            {faqItems.map((item) => (
              <Card
                key={item.key}
                className={`mb-4 ${
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
                  <h4 className={`mx-3 ${styles.title}`}>{item.question}</h4>
                </CustomToggle>
                <Accordion.Collapse eventKey={item.key}>
                  <Card.Body className="px-5 py-0">
                    {item.answers.map((answer, idx) => {
                      if (typeof answer === "string") {
                        return (
                          <p key={idx} className={styles.body}>
                            {answer}
                          </p>
                        );
                      } else if (answer.type === "list") {
                        return (
                          <ul key={idx}>
                            {answer.items.map((point, i) => (
                              <li key={i} className={`mb-2 ${styles.body}`}>
                                {point}
                              </li>
                            ))}
                          </ul>
                        );
                      } else {
                        return null;
                      }
                    })}
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

export default BusinessFaqs;

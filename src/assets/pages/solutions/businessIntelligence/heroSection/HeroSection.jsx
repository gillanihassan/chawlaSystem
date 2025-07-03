import { Row, Col, Form, Button } from "react-bootstrap";
import styles from "./styles.module.css";

const formFields = [
  { id: "formName", type: "text", placeholder: "Your Name *", col: 6 },
  { id: "formEmail", type: "email", placeholder: "Your Email *", col: 6 },
  { id: "formPhone", type: "text", placeholder: "Phone Number *", col: 12 },
];

const projectOptions = [
  "Business Intelligence",
  "Deep Learning",
  "Machine Learning",
  "Predictive Analysis",
  "Data Scraping",
  "Data Science",
  "Data Visualization",
  "Data Analytic",
  "Generative AI",
  "Sentiment Analysis",
  "AI chatbot & customer support",
  "eCommerce Development",
  "voice Commerce",
  "customer Segmentation",
];

const budgetOptions = [
  "Less than USD 50,0000",
  "USD 50,0000 - USD 100,00",
  "USD 50,0000 - USD 200,00",
  "Above USD 50,0000",
];

const HeroSection = () => {
  return (
    <div className={`${styles.heroSection}`}>
      <div className="container-xxl">
        <Row className="d-flex justify-content-center">
          <Col sm={12} md={7}>
            <h1 className={`${styles.topHeading}`}>Business Intelligence</h1>
            <p className={`mt-4 ${styles.para}`}>
              Imagine having complete clarity on every decision and knowing
              exactly which opportunities to pursue to grow your business.
              That's the power of our business intelligence solutions.
            </p>
            <Button className={`mt-5 ${styles.btnContent}`}>
              Schedule a Free Consultation
            </Button>
          </Col>
          <Col
            sm={12}
            md={4}
            className={`d-flex justify-content-center align-items-center mt-5 mt-md-0  ${styles.rightCol}`}
          >
            <Form className={`p-3 ${styles.form}`}>
              <Row>
                {formFields.map((field, idx) => (
                  <Col md={field.col} key={idx}>
                    <Form.Group className="mb-4" controlId={field.id}>
                      <Form.Control
                        className={`${styles.formControl}`}
                        type={field.type}
                        placeholder={field.placeholder}
                      />
                    </Form.Group>
                  </Col>
                ))}
              </Row>

              <Form.Group className="mb-4" controlId="formBusiness">
                <Form.Select className={`${styles.formControl}`}>
                  {projectOptions.map((opt, idx) => (
                    <option key={idx}>{opt}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-4" controlId="formProject">
                <Form.Control
                  className={`${styles.formControl}`}
                  as="textarea"
                  placeholder="Please describe your project"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBudget">
                <Form.Select className={`${styles.formControl}`}>
                  {budgetOptions.map((opt, idx) => (
                    <option key={idx}>{opt}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Check type="checkbox" label="Request NDA" />
              <Button className={`w-100 mt-4 ${styles.btn}`}>Send</Button>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HeroSection;

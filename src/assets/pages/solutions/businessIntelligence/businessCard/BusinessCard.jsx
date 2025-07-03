import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "./styles.module.css";

const BusinessCard = () => {
  // Dynamic data array
  const featuresData = [
    {
      title: "Tailored BI Strategy",
      text: "Develop a Business Intelligence plan aligned with your company’s unique goals. Our collaborative approach includes defining key performance indicators (KPIs), identifying the right data sources, and building a clear execution roadmap to drive informed decision-making.",
      cols: 6,
      width: "30rem",
      className: styles.featureCard,
    },
    {
      title: "Data Visualization & Reporting",
      text: "Turn complex data into clear, actionable insights with intuitive visualizations and dynamic reports. We design user-friendly dashboards that integrate data from multiple sources, delivering powerful analytical insights at a glance. Our self-service BI systems make it easy for users to access and analyze the information they need – anytime, without technical barriers.",
      cols: 6,
      width: "30rem",
      className: styles.featureCard,
    },
    {
      title: "Custom BI Dashboards – Powered by AZK AI",
      text: "Equip your team with interactive, intuitive BI dashboards designed for real-time decision-making. AZK AI’s dashboard solutions convert both structured and unstructured data into meaningful visuals – charts, diagrams, scorecards, and spreadsheets – making critical business insights accessible at a glance. Make smarter decisions, faster, wherever you are.",
      cols: 6,
      width: "30rem",
      className: styles.featureCard,
    },
    {
      title: "Predictive Modeling by AZK AI",
      text: "Leverage advanced statistics and predictive modeling to forecast trends, uncover opportunities, and mitigate risks. AZK AI enables your business to dive deep into data at every level, generating valuable insights across operations and processes. Turn your data into a strategic asset that drives smarter decisions and boosts overall efficiency.",
      cols: 6,
      width: "30rem",
      className: styles.featureCard,
    },
    {
      title: "Data Warehousing Solutions – Delivered by AZK AI",
      text: "Lay a strong foundation for your Business Intelligence with AZK AI’s scalable data warehousing solutions. We design and implement systems that streamline data aggregation, storage, processing, and analysis. From Extract, Transform, and Load (ETL) processes to data marts and 360-degree view architectures, our solutions ensure seamless integration and easy access to all your critical data.",
      cols: 12,
      width: "60rem",
      className: styles.featureCardTwo,
    },
  ];

  return (
    <div fluid className={`container-xxl p-3 ${styles.featuresContainer}`}>
      <Row>
        <Col md={8}>
          <Row className="align-items-stretch">
            {featuresData.slice(0, 4).map((feature, index) => (
              <Col
                key={index}
                md={feature.cols}
                className="d-flex justify-content-center align-items-center my-2"
              >
                <Card
                  style={{ width: feature.width }}
                  className={`h-100 ${feature.className}`}
                >
                  <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                    <Card.Title className={`text-center ${styles.title}`}>
                      {feature.title}
                    </Card.Title>
                    <Card.Text className={`text-center ${styles.text}`}>
                      {feature.text}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Second Row with single wide card */}
          <Row className="align-items-stretch">
            <Col
              md={featuresData[4].cols}
              className="d-flex justify-content-center align-items-center my-2"
            >
              <Card
                style={{ width: featuresData[4].width }}
                className={`h-100 ${featuresData[4].className}`}
              >
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                  <Card.Title className={`text-center ${styles.title}`}>
                    {featuresData[4].title}
                  </Card.Title>
                  <Card.Text className={`text-center ${styles.text}`}>
                    {featuresData[4].text}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default BusinessCard;

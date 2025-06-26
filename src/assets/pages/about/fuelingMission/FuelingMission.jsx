import Card from "react-bootstrap/Card";
import styles from "./styles.module.css";
import IconOne from "../../../pages/about/images/fuelingMission/icon-one.png";
import IconTwo from "../../../pages/about/images/fuelingMission/icon-two.png";
import IconThree from "../../../pages/about/images/fuelingMission/icon-three.png";
import IconFour from "../../../pages/about/images/fuelingMission/icon-four.png";
import { Col, Image, Row } from "react-bootstrap";

function FuelingMission() {
  const cardData = [
    {
      id: 1,
      icon: IconOne,
      title: "Passionate",
      text: "We are intensely enthusiastic about providing a superior experience.",
    },
    {
      id: 2,
      icon: IconTwo,
      title: "Respectful",
      text: "We are polite and kind to one another, even when it gets tough.",
    },
    {
      id: 3,
      icon: IconThree,
      title: "Ownership",
      text: "We are empowered to do our jobs and work towards a common goal.",
    },
    {
      id: 4,
      icon: IconFour,
      title: "Unified",
      text: "We work as a team and trust each other to create a seamless experience.",
    },
  ];

  return (
    <div className="container-xxl mt-5">
      <Row className="mt-5 gy-3">
        {cardData.map((item) => (
          <Col
            key={item.id}
            md={6}
            lg={6}
            xl={3}
            xxl={3}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <Image src={item.icon} />
            <Card
              style={{
                width: "20rem",
                backgroundColor: "#000000",
              }}
            >
              <Card.Body>
                <Card.Title className={`text-center ${styles.cardHeading}`}>
                  {item.title}
                </Card.Title>
                <Card.Text className={`mt-3 text-center ${styles.cardText}`}>
                  {item.text}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default FuelingMission;

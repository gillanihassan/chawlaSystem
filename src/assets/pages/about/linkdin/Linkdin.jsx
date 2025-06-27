import { Col, Image, Row } from "react-bootstrap";
import LinkdinIcon from "../../../pages/about/images/linkdin/linkdin-icon.png";
import styles from "./styles.module.css";

function Linkdin() {
  const teamMembers = [
    { id: 1, image: LinkdinIcon },
    { id: 2, image: LinkdinIcon },
    { id: 3, image: LinkdinIcon },
    { id: 4, image: LinkdinIcon },
  ];

  return (
    <div className={`container-xxl mt-5 p-3 ${styles.mainContainer}`}>
      <h2 className={`${styles.topHeading}`}>
        Meet the <br /> leadership team
      </h2>
      <Row className="mt-3 gy-5 d-flex justify-content-center align-items-center">
        {teamMembers.map((member) => (
          <Col key={member.id} sm={6} md={6} lg={6} xl={3} xxl={3}>
            <Image src={member.image} className={`${styles.customImage}`} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Linkdin;

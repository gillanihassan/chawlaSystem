import { Button, Col, Row } from "react-bootstrap";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function Support() {
  return (
    <div className={`container-xxl p-3  ${styles.mainDiv}`}>
      <Row className="d-flex flex-column justify-content-center align-items-center">
        <Col xs={11} sm={10} md={8}>
          <Button className={`mb-3 ${styles.btn}`}>Why US</Button>
          <p className={`${styles.para}`}>
            We understand that business can be chaotic. That’s where we come in.
            We’re focused on adding some much-needed balance to the mix. We
            accomplish that by forging real partnerships with our clients. When
            you work with us, you’re working with a team who understands your
            pain points and your goals. We’ll help you find order in the midst
            of the chaos.{" "}
          </p>
          <Link className={`${styles.link}`}>Learn more</Link>
        </Col>
      </Row>
    </div>
  );
}

export default Support;

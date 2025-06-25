import { Row, Col, Image, Button } from "react-bootstrap";
import styles from "./styles.module.css";
import ImageOne from "../../../pages/home/images/industry/img-one.png";
import ImageTwo from "../../../pages/home/images/industry/img-two.png";
import ImageThree from "../../../pages/home/images/industry/img-three.png";
import ImageFour from "../../../pages/home/images/industry/img-four.png";
import ImageFive from "../../../pages/home/images/industry/img-five.png";
import ImageSix from "../../../pages/home/images/industry/img-six.png";

// Step 1: Array for industry items
const industryData = [
  {
    name: "Industry & Manufacturing",
    image: ImageOne,
  },
  {
    name: "Transportation & Logistics",
    image: ImageTwo,
  },
  {
    name: "Healthcare",
    image: ImageThree,
  },
  {
    name: "Banks & Insurance",
    image: ImageFour,
  },
  {
    name: "Consulting Providers",
    image: ImageFive,
  },
  {
    name: "Non-Profit",
    image: ImageSix,
  },
];

function Industry() {
  return (
    <div className={`container-xxl p-4 mt-4 ${styles.mainDiv}`}>
      <Row className="d-flex justify-content-center">
        <Col md={10} lg={10} xl={9} xxl={9}>
          {/* Top Label */}
          <Button className={`mb-4 ${styles.btn}`}>WHAT WE DO</Button>

          {/* Heading */}
          <h1 className={`${styles.mainHeading}`}>
            Solving IT challenges in every <br /> industry, every day.
          </h1>

          {/* Dynamic Cards */}
          <Row className="gx-3 gy-3 mt-5">
            {industryData.map((item, index) => (
              <Col md={4} key={index}>
                <div className="d-flex align-items-center bg-light rounded-pill p-2">
                  <Image
                    src={item.image}
                    roundedCircle
                    style={{ width: 40, height: 40, objectFit: "cover" }}
                    className="me-2"
                  />
                  <span className={`${styles.spanOne}`}>{item.name}</span>
                </div>
              </Col>
            ))}
          </Row>

          {/* View All Link */}
          <p className="mt-4 text-warning fw-semibold">View All Industries</p>
        </Col>
      </Row>
    </div>
  );
}

export default Industry;

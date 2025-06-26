import { Col, Image, Row } from "react-bootstrap";
import styles from "./styles.module.css";
import ImageOne from "../../../pages/about/images/topSection/img-one.png";
import ImageTwo from "../../../pages/about/images/topSection/img-two.png";
import ImageThree from "../../../pages/about/images/topSection/img-three.png";

const sectionData = [
  {
    heading: "The Beginning",
    para: "The Tecnologia journey began in 1995 when two college friends, John Salivan and Kris Klopperman got together and started selling computers and engineering calculators.",
    image: ImageOne,
    reverse: false, // Image left
  },
  {
    heading: "Mission",
    para: "At Tecnologia, we’re on a mission to bring together the personal service of local IT providers with the power of a national network. We believe that’s simpler than it sounds. Our offices offer high-touch IT services that clients love from highly experienced local team members.",
    image: ImageTwo,
    reverse: true, // Image right
  },
  {
    heading: "We are global",
    para: "Our national network allows us to offer best-in-class services like dedicated vCIOs, specialized security and compliance advisory services, a 24/7 help desk, and more.",
    image: ImageThree,
    reverse: false,
  },
];

function TopSection() {
  return (
    <div className={`container-xxl p-3 ${styles.mainDiv}`}>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h2 className={`${styles.topHeading}`}>
          Dedicated to delivering excellence
        </h2>
        <p className={`mt-2 ${styles.contentPara}`}>
          Everyone has a story. Here is ours.
        </p>
      </div>
      <Row className="d-flex justify-content-center align-items-center">
        <Col md={12} lg={9} xl={9} xxl={9}>
          {sectionData.map((item, index) => (
            <Row key={index} className="mt-5">
              {!item.reverse ? (
                <>
                  {/* Left Image */}
                  <Col
                    md={6}
                    className="d-flex justify-content-center justify-content-md-start"
                  >
                    <Image src={item.image} className={styles.leftImage} />
                  </Col>
                  {/* Right Content */}
                  <Col
                    md={6}
                    className="d-flex justify-content-center flex-column align-items-center align-items-md-start mt-4 mt-md-0"
                  >
                    <h2 className={styles.rightHeading}>{item.heading}</h2>
                    <p className={`mt-4 ${styles.rightPara}`}>{item.para}</p>
                  </Col>
                </>
              ) : (
                <>
                  {/* Left Content */}
                  <Col
                    md={6}
                    className="d-flex justify-content-center flex-column align-items-center align-items-md-start mt-4 mt-md-0"
                  >
                    <h2 className={styles.rightHeading}>{item.heading}</h2>
                    <p className={`mt-4 ${styles.rightPara}`}>{item.para}</p>
                  </Col>
                  {/* Right Image */}
                  <Col
                    md={6}
                    className="d-flex justify-content-center justify-content-md-start"
                  >
                    <Image src={item.image} className={styles.leftImage} />
                  </Col>
                </>
              )}
            </Row>
          ))}
        </Col>
      </Row>
    </div>
  );
}

export default TopSection;

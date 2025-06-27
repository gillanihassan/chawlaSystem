import { Image } from "react-bootstrap";
import styles from "./styles.module.css";
import HeroImage from "../../../pages/solutions/images/itsolutions/hero-image.png";

// 🔹 Content object
const itSolutionsContent = {
  heading: "Services & Solutions",
  subheading:
    "Take your company to new heights by investing in our reliable and efficient technology solutions.",
  image: HeroImage,
  description:
    "Tecnologia is your trusted partner for IT management, data security, and cloud technology with one goal in mind: to transform the way your business works in order to save you time and money.",
};

// 🔹 Main Component
function ItSolutions() {
  return (
    <div
      className={`container-xxl d-flex flex-column justify-content-center align-items-center ${styles.mainContainer}`}
    >
      <h2 className={`text-center ${styles.topHeading}`}>
        {itSolutionsContent.heading}
      </h2>

      <p className={`${styles.topPara}`}>{itSolutionsContent.subheading}</p>

      <Image
        src={itSolutionsContent.image}
        className={`${styles.customImage}`}
      />

      <div>
        <p className={`text-start mt-5 ${styles.topPara}`}>
          {itSolutionsContent.description}
        </p>
      </div>
    </div>
  );
}

export default ItSolutions;

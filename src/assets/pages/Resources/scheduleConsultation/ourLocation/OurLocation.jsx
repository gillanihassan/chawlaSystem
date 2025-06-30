import styles from "./styles.module.css";

function OurLocation() {
  return (
    <div className={`container-xxl mt-5 mb-5 ${styles.mainDiv}`}>
      <div>
        <h2 className={`${styles.topHeading}`}>Our locations</h2>
        <p className={`mt-4 ${styles.topPara}`}>
          We have offices throughout the East Coast, Midwest, and South — we’d
          love to show you around sometime. Don’t see an office in your area? We
          have the power to support your business, no matter the location.
        </p>
      </div>

      <div className="mt-5">
        <h2 className={`${styles.topHeadingTwo}`}>Wyoming</h2>
        <p className={`mt-3 ${styles.topParaTwo}`}>
          Sheridan <br /> 1309 Coffeen Ave STE 1200, <br /> Sheridan, WY 82801{" "}
          <br />
          (914) 369-3435
        </p>
      </div>
    </div>
  );
}

export default OurLocation;

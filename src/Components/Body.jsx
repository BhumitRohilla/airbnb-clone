import React from "react";
import styles from "./body.module.css";

function Body() {
  return (
    <div>
      <div className={styles.grid}>
        <div className={styles.gridItem}>
          <img
            className={`${styles.gridImg} ${styles.gridImg1}`}
            src={process.env.PUBLIC_URL + "/1.png"}
            alt=""
          />
        </div>
        <div className={styles.gridItem}>
          <img className={styles.gridImg} src={process.env.PUBLIC_URL + "/2.png"} alt="" />
          <img className={styles.gridImg} src={process.env.PUBLIC_URL + "/3.png"} alt="" />
        </div>
        <div className={styles.gridItem}>
          <img
            className={`${styles.gridImg} ${styles.gridImg2}`}
            src={process.env.PUBLIC_URL + "/4.png"}
            alt=""
          />
          <img className={styles.gridImg} src={process.env.PUBLIC_URL + "/5.png"} alt="" />
        </div>
        <div className={styles.gridItem}>
          <img className={styles.gridImg} src={process.env.PUBLIC_URL + "/6.png" }alt="" />
          <img className={styles.gridImg} src={process.env.PUBLIC_URL + "/7.png"} alt="" />
        </div>
        <div className={styles.gridItem}>
          <img
            className={`${styles.gridImg} ${styles.gridImg3}`}
            src={process.env.PUBLIC_URL + "/8.png"}
            alt=""
          />
          <img className={styles.gridImg} src={process.env.PUBLIC_URL + "/9.png"} alt="" />
        </div>
      </div>
      <div style={{ margin: "50px 0px 0px 3%", width: "347px" }}>
        <h1 className={styles.head}>
          <strong>Online Experiences</strong>
        </h1>
        <p className={styles.para}>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}

export default Body;

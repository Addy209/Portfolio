import React from "react";
import styles from "./home.module.css";
import Nav from "./nav";
import Hero from "./herotext";
import RightSide from "./rightside";

const Home = () => {
  return (
    <div className={styles.div}>
      <Nav />
      <div className={styles.herodiv}>
        <Hero />
        <RightSide />
      </div>
      <img src="./wave.svg" className={styles.img} />
    </div>
  );
};

export default Home;

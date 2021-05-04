import React from "react";
import {
  SiFiverr,
  SiGmail,
  SiFreelancer,
  SiGithub,
  SiUpwork,
} from "react-icons/si";
import styles from "./home.module.css";

const Social = () => {
  return (
    <div className={styles.social}>
      <SiGmail fill="#cb3a2e" className={styles.icon} />
      <SiFiverr fill="#1dbf73" className={styles.icon} />
      <SiFreelancer fill="#29b2fe" className={styles.icon} />
      <SiUpwork fill="#1dbf73" className={styles.icon} />
      <SiGithub fill="#ffffff" className={styles.icon} />
    </div>
  );
};

export default Social;

import React from "react";
import styles from "./home.module.css";
import { AspectRatio } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import Social from "./social";

const RightSide = () => {
  const [isLessThan750px] = useMediaQuery("(max-width: 750px)");
  return (
    <>
      {isLessThan750px ? null : (
        <div className={styles.rightsidediv}>
          <div>
            <img src="./Web Developer_Isometric.svg" />
          </div>
        </div>
      )}
    </>
  );
};
export default RightSide;

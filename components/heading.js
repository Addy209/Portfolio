import React from "react";
import { Text } from "@chakra-ui/react";
import styles from "./Section2/services.module.css";

const Heading = (props) => {
  return (
    <div className={styles.head}>
      <Text
        bgGradient="linear(to-l, #000b76,#000b76)"
        bgClip="text"
        fontSize="4xl"
        fontWeight="extrabold"
      >
        {props.heading}
      </Text>
    </div>
  );
};

export default Heading;

import React from "react";
import { Text } from "@chakra-ui/react";
import styles from "./Section2/services.module.css";

const Heading = (props) => {
  let color = props?.color ?? "#000b76";
  const gradient = `linear(to-l, ${color},${color})`;
  return (
    <div className={styles.head}>
      <Text
        bgGradient={gradient}
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

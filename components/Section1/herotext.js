import React from "react";
import styles from "./home.module.css";
import { Box, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Text
        bgGradient="linear(to-l, #fff,#fff)"
        bgClip="text"
        fontSize="5xl"
        fontWeight="extrabold"
      >
        Coding Ideas into Softwares
      </Text>
      <Box
        as="button"
        p={4}
        color="white"
        fontWeight="bold"
        borderRadius="md"
        bgGradient="linear(to-r, #7928CA,#FF0080)"
        _hover={{
          bgGradient: "linear(to-r, red.500, yellow.500)",
        }}
      >
        Let's Go
      </Box>
    </div>
  );
};

export default Hero;

import React from "react";
import styles from "./home.module.css";
import { Box, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import Social from "./social";

const Nav = () => {
  const [isLessThan750px] = useMediaQuery("(max-width: 750px)");
  return (
    <nav className={styles.nav}>
      <Text
        bgGradient="linear(to-l, #ffffff,#ffffff)"
        bgClip="text"
        fontSize="3xl"
        fontWeight="extrabold"
      >
        King Makers
      </Text>
      <div className={styles.righthead}>
        {isLessThan750px ? null : <Social />}
        <Box
          as="button"
          p={3}
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
    </nav>
  );
};

export default Nav;

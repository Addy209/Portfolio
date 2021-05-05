import React from "react";
import styles from "./services.module.css";
import { Box, Heading, Text, Image, Badge } from "@chakra-ui/react";

const ServiceCard = (props) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg={props.bg}
      className={styles.box}
    >
      <Image
        src={props.img}
        alt={"svg"}
        className={styles.image}
        layout="fill"
        draggable={false}
      />
      <Box className={styles.badge}>
        <Badge borderRadius="full" px="2" colorScheme={props.colorscheme}>
          {props.badge}
        </Badge>
      </Box>
      <Box p="6" style={{ textAlign: "center" }}>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {props.heading}
        </Box>

        <Box>{props.content}</Box>
      </Box>
    </Box>
  );
};

export default ServiceCard;

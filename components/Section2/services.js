import React from "react";
import styles from "./services.module.css";
import ServiceCard from "./servicecard";
import Heading from "../heading";
const data = [
  {
    img: "./undraw_static_website_0107.svg",
    colorscheme: "teal",
    bg: "rgba(255, 99, 132, 0.2)",
    badge: "Value for Money",
    heading: "Static Website Devlopment",
    content: "Beautiful Personal Portfolio or Business Website",
  },
  {
    img: "./undraw_server_cluster_jwwq.svg",
    colorscheme: "red",
    bg: "rgba(75, 192, 192, 0.2)",
    badge: "Hot",
    heading: "Rapid Api Development",
    content: "Rest API endpoints for your backend application",
  },
  {
    img: "./Web Developer_Monochromatic.svg",
    colorscheme: "green",
    bg: "rgba(153, 102, 255, 0.2)",
    badge: "Ever Green",
    heading: "End to End Web Application",
    content: "Fully Functional Web Applications With Data Storage",
  },
];

const Services = () => {
  return (
    <div className={styles.servicelayout}>
      <Heading heading="Our Services" />

      <div className={styles.service}>
        {data.map((val, index) => {
          return (
            <ServiceCard
              img={val.img}
              colorscheme={val.colorscheme}
              bg={val.bg}
              badge={val.badge}
              heading={val.heading}
              content={val.content}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;

import Head from "next/head";
import styles from "../styles/Home.module.css";
import Home1 from "../components/Section1/home";
import Services from "../components/Section2/services";
import TechWeUse from "../components/Section3/techweuse";
import { useEffect } from "react";

export default function Home() {
  return (
    <>
      <Home1 />
      <div>
        <Services />
      </div>
      <div>
        <TechWeUse />
      </div>
    </>
  );
}

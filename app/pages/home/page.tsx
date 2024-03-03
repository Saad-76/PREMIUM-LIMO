import React from "react";
import Hero from "./hero";
import Rates from "./rate";
import Quote from "./quote";
import Banner from "./banner";
import Safety from "./safety";
import Comfort from "./comfort";
import Services from "../services/page";
import Container from "@/components/container";

const HomePage: React.FC = () => {
  return (
    <Container>
      <Hero />
      <Rates />
      {/* <Quote /> */}
      {/* <Banner /> */}
      {/* <Services /> */}
      {/* <Comfort /> */}
      <Safety />
    </Container>
  );
};
export default HomePage;

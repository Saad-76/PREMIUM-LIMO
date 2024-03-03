import React from "react";
import Header from "./header";
import Footer from "./footer";

interface containerInterface {
  children: any;
}

const Container: React.FC<containerInterface> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default Container;

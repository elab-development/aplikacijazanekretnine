import React from "react";
import Header from "./Header";
import Description from "./Description";
import ContactInformation from "./ContactInformation";
import GetStarted from "./GetStarted";
import Footer from "../../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Description />
      <ContactInformation />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default Home;
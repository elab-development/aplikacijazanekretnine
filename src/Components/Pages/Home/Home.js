import React from "react";
import Header from "./Header";
import Description from "./Description";
import ContactInformation from "./ContactInformation";
import GetStarted from "./GetStarted";


const Home = () => {
  return (
    <div>
      <Header />
      <Description />
      <ContactInformation />
      <GetStarted />
    </div>
  );
};

export default Home;
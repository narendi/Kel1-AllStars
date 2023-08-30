import React from "react";
import Navbarguest from "../components/layout/navbar/navbarguest";
import ContentAdminFinal from "../components/content/homeContentFinal";

const Home = () => {
  return (
    <React.Fragment>
      <div className="w-full h-full">
        <Navbarguest />
        <div className="hero w-full h-[42rem]">
          <ContentAdminFinal />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;

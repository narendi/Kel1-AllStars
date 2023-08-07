import React from "react";
import Navbarguest from "../components/layout/navbar/navbarguest";
import ContentAdminFinal from "../components/content/homeContentFinal";
import Card from "../components/kontenAll/card";
// import Konten from "../components/kontenAll/konten";

const Home = () => {
  return (
    <React.Fragment>
      <div className="w-full h-full">
        <Navbarguest />
        <div className="hero w-full h-[42rem]">
          <ContentAdminFinal />
          {/* <Card /> */}
        </div>
      </div>

      {/* <Konten /> */}
    </React.Fragment>
  );
};

export default Home;

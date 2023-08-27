import React from "react";
import Navbarguest from "../components/layout/navbar/navbarguest";
import MyFooter from "../components/layout/footer/footer";
import Djk from "../components/content/detailJawabanKuis";

const Detailjawaban = () => {
  return (
    <div>
      <Navbarguest />
      
      <Djk />
      <MyFooter />
    </div>
  );
};

export default Detailjawaban;

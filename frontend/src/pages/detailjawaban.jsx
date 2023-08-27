import React, { useState, useEffect } from "react";
import Navbarguest from "../components/layout/navbar/navbarguest";
import MyFooter from "../components/layout/footer/footer";
import Djk from "../components/content/detailJawabanKuis";
import SidebarProfile from "../components/layout/sidebar/sidebar";
import axios from "axios";

const Detailjawaban = () => {
  const [activeMenu, setActiveMenu] = useState("Pelatihan saya");
  const [userData, setUserData] = useState({ username: "", email: "" });

  useEffect(() => {
    axios
      .get(`http://localhost:3100/user/2`)
      .then((response) => {
        console.log("User Data:", response.data);
        setUserData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <Navbarguest />
      <div className="flex-row flex">
        <SidebarProfile
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          userData={userData}
        />
        <main className="flex-1 p-8">
          <Djk />
        </main>
      </div>
      <MyFooter />
    </div>
  );
};

export default Detailjawaban;

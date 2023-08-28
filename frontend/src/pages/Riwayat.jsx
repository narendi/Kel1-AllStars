import React, { useState, useEffect } from "react";
import SidebarProfile from "../components/layout/sidebar/sidebar";
import NavigationBar from "../components/layout/navigationBar/navigationBar";
import MyFooter from "../components/layout/footer/footer";
import axios from "axios";
import RKuis from "../components/IsiPelatihan/RiwayatKuis"

const Riwayat = () => {
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
    <>
      <NavigationBar />
      <div className="flex-row flex">
        <SidebarProfile
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          userData={userData}
        />
        <main className="flex-1 p-8">
          <RKuis />
        </main>
      </div>
      <MyFooter />
    </>
  );
};

export default Riwayat;

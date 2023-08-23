import React, { useState } from "react";
import SidebarProfile from "../components/layout/sidebar/sidebar";
import NavigationBar from "../components/layout/navigationBar/navigationBar";
import MyFooter from "../components/layout/footer/footer";
import Sertifikat from "../components/content/sertifikat";

function SertifikatProfile() {
  const [activeMenu, setActiveMenu] = useState("Sertifikat"); // Menu aktif default

  return (
    <>
    <NavigationBar/>

    <div className="flex">
      <SidebarProfile activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <main className="flex-1 p-8">
        <Sertifikat/>
      </main>
    </div>
    
    <MyFooter/>
    </>
  );
}

export default SertifikatProfile;

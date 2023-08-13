import React, { useState } from "react";
import SidebarProfile from "../components/layout/sidebar/sidebar";
import NavigationBar from "../components/layout/navigationBar/navigationBar";
import Dpi from "../components/content/dashboard";
import MyFooter from "../components/layout/footer/footer";

function DashboardProfile() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  return (
    <>
      <NavigationBar />

      <div className="flex-row flex">
        <SidebarProfile activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <main className="flex-1 p-8">
          <Dpi/>
        </main>
        
      </div>
      <MyFooter/>
    </>
  );
}

export default DashboardProfile;

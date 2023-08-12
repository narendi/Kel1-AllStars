import React, { useState } from "react";
import SidebarProfile from "../components/layout/sidebar/sidebar";
import NavigationBar from "../components/layout/navigationBar/navigationBar";

function DashboardProfile() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  return (
    <>
      <NavigationBar />

      <div className="flex-row flex">
        <SidebarProfile activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <main className="flex-1 p-8">
          <h1>Hai Gaes, ini halaman Dashboard</h1>
        </main>
      </div>
    </>
  );
}

export default DashboardProfile;

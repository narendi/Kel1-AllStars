import React, { useState } from "react";
import SidebarProfile from "../components/layout/sidebar/sidebar";

function SertifikatProfile() {
  const [activeMenu, setActiveMenu] = useState("Sertifikat"); // Menu aktif default

  return (
    <div className="flex">
      <SidebarProfile activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <main className="flex-1 p-8">
        <h1>Hai cuy</h1>
      </main>
    </div>
  );
}

export default SertifikatProfile;

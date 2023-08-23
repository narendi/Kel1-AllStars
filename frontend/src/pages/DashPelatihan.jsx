import React from "react";
import SidebarProfile from "../components/layout/sidebar/sidebar";
import NavigationBar from "../components/layout/navigationBar/navigationBar";
import MyFooter from "../components/layout/footer/footer";
import IPelatihan from "../components/IsiPelatihan/IsiPelatihan";

const DPelatihan = () => {

    return(
<>
    <NavigationBar /> 
    <div className="flex-row flex">
    {/* <SidebarProfile /> */}
        <IPelatihan/>
    </div>
    <MyFooter />
</>


    );
};

export default DPelatihan;
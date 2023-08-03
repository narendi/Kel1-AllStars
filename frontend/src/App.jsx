import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbarguest from "./components/layout/navbar/navbarguest";
import Home from "./pages/home";
import ProfileMenu from "./components/layout/navigationBar/profileMenu";
import Toogle_notif from "./components/notification/toogle_notif";
import NavigationBar from "./components/layout/navigationBar/navigationBar";
import NotifAcc from "./components/notifAcc/notifAcc";
import Dropdown from "./components/layout/navbar/dropdown";
import Konten from "./components/kontenAll/konten";
import ContentSwiper from "./components/kontenAll/contentSwiper";
import HomeLogin from "./pages/homeLogin";
import ContentAdminFinal from "./components/content/homeContentFinal";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<HomeLogin />} />
        <Route path="/login" />
        
        //Route Components 
        <Route path="/profilmenu" element={<ProfileMenu />} />
        <Route path="/navigationBar" element={<NavigationBar />} />
        <Route path="/toogle-notif" element={<Toogle_notif />} />
        <Route path="/notifAcc" element={<NotifAcc />} />
        <Route path="/dropdown" element={<Dropdown />} /> //dropdown kategori
        <Route path="/konten" element={<Konten />} />
        <Route path="/contentSwiper" element={<ContentSwiper />} />
        <Route path="/content-home" element={<ContentAdminFinal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

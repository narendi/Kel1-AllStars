import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Kategory from "./pages/kategory";
import Allkategori from "./pages/allkategori";
import TransactionBox from "./components/kontenAll/transaksi";
import Ulasan from "./components/kontenAll/ulasan";
import DetailPelatihan from "./components/content/detailPelatihan";
import Kateg from "./components/kontenAll/card";

import Kategori from "./pages/kategori";
import IsiPelatihan from "./components/isi pelatihan/isipelatihan";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/home" element={<HomeLogin />} />
        <Route path="/All" element={<Allkategori />} />
        <Route path="/login" />
        //Route Components
        <Route path="/tr" element={<TransactionBox />} />
        <Route path="/coment" element={<Ulasan />} />
        <Route path="/lg" element={<Login />} />
        <Route path="/daftar" element={<Signup />} />
        <Route path="/sidebar" element={<SidebarProfile />} />
        <Route path="/detail" element={<DetailPelatihan />} />

        <Route path="/profilmenu" element={<ProfileMenu />} />
        <Route path="/navigationBar" element={<NavigationBar />} />
        <Route path="/toogle-notif" element={<Toogle_notif />} />
        <Route path="/notifAcc" element={<NotifAcc />} />
        <Route path="/dropdown" element={<Dropdown />} />
        <Route path="/konten" element={<Konten />} />
        <Route path="/contentSwiper" element={<ContentSwiper />} />

        <Route path="/content-home" element={<ContentAdminFinal />} />
        <Route path="/kt" element={<Kategory />} />
        <Route path="/card" element={<Kateg />} />

        <Route path="/kg" element={<Kategori />} />
        <Route path="/iss" element={<IsiPelatihan />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

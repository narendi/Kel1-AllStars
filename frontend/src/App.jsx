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
import Allkategori from "./pages/allkategori";
import TransactionBox from "./components/kontenAll/transaksi";
import Ulasan from "./components/kontenAll/ulasan";
import DetailPelatihan from "./components/content/detailPelatihan";
import Pelatihan from "./pages/pelatihan";
import Kateg from "./components/kontenAll/kategori";
import Pengetahuan from "./pages/registrasiPNG";
import SidebarProfile from "./components/layout/sidebar/sidebar";
import DashboardProfile from "./pages/dashboard";
import SertifikatProfile from "./pages/sertifikat";
import Login from "./components/login/login";
import Signup from "./components/login/daftar";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<HomeLogin />} />
        <Route path="/All" element={<Allkategori />} />
        <Route path="/SR" element={<SertifikatProfile />} />
        <Route path="/DP" element={<DashboardProfile />} />
        <Route path="/pelatihan" element={<Pelatihan />} />
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
        <Route path="/card" element={<Kateg />} />
        <Route path="/rrq" element={<Pengetahuan />} />
       

      </Routes>
    </BrowserRouter>
  );
}

export default App;

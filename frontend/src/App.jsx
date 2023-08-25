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
import Kateg from "./components/card/kategori";
import Pengetahuan from "./pages/registrasiPNG";
import SidebarProfile from "./components/layout/sidebar/sidebar";
import DashboardProfile from "./pages/dashboard";
import SertifikatProfile from "./pages/sertifikat";
import Login from "./components/login/login";
import Signup from "./components/login/daftar";
import Lojin from "./components/lojin/lojin";
import Registrasi from "./components/lojin/Registrasi";
import Pembayaran from "./components/HalamanPembayaran/Pembayaran";
import BankTransfer from "./components/HalamanPembayaran/BankTransfer";
import Ewallet from "./components/HalamanPembayaran/E-wallet";
import DPelatihan from "./pages/DashPelatihan";
import Creditcard from "./components/HalamanPembayaran/Creditcard";
import Edit from "./components/registrasipengetahuan/Edit";
import DetailP from "./components/DetailPelatihan/Detail";

import Payment from "./components/content/payment";
import PaymentHistory from "./pages/paymenhistory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<HomeLogin />} />
        <Route path="/All" element={<Allkategori />} />
        <Route path="/allkategl" element={<Allkategori />} />
        <Route path="/SR" element={<SertifikatProfile />} />
        <Route path="/DP" element={<DashboardProfile />} />
        <Route path="/DPS" element={<DPelatihan />} />
        <Route path="/payment" element={<PaymentHistory />} />
        <Route path="/dashboard" element={<DashboardProfile />} />
        <Route path="/pelatihan" element={<Pelatihan />} />
        <Route path="/login" />
        //Route Components
        <Route path="/pay" element={<Payment />} />
        <Route path="/tr" element={<TransactionBox />} />
        <Route path="/coment" element={<Ulasan />} />
        <Route path="/lg" element={<Login />} />
        <Route path="/daftar" element={<Signup />} />
        <Route path="/sidebar" element={<SidebarProfile />} />
        <Route path="/detail/:id" element={<DetailPelatihan />} />
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
        <Route path="/Detil" element={<DetailP />} />
        <Route path="/lojin" element={<Lojin />} />
        <Route path="/registrasi" element={<Registrasi />} />
        <Route path="/pembayaran" element={<Pembayaran />} />
        <Route path="/banktransfer" element={<BankTransfer />} />
        <Route path="/Ewallet" element={<Ewallet />} />
        <Route path="/Creditcard" element={<Creditcard />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

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
import Signup from "./components/login/daftar";
import Login from "./components/lojin/login";
import Registrasi from "./components/lojin/Registrasi";
import Pembayaran from "./components/HalamanPembayaran/Pembayaran";
import BankTransfer from "./components/HalamanPembayaran/BankTransfer";
import Ewallet from "./components/HalamanPembayaran/E-wallet";
import DPelatihan from "./pages/DashPelatihan";
import Creditcard from "./components/HalamanPembayaran/Creditcard";
import Edit from "./components/registrasipengetahuan/Edit";
import IsiPelatihan from "./pages/isipelatihan";
import Isipengetahuan from "./components/content/isipengetahuan";
import Payment from "./components/content/payment";
import PaymentHistory from "./pages/paymenhistory";
import Riwayat from "./components/IsiPelatihan/RiwayatKuis";
import DetailP from "./components/DetailPelatihan/Detail";
import Akun from "./components/content/akun";
import AkunPage from "./pages/akun";
import Password from "./components/content/password";
import Detailjawaban from "./pages/detailjawaban";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        //Route pages
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
        <Route path="/akunpage" element={<AkunPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/isipelatihan" element={<IsiPelatihan />} />
        //Route Components
        <Route path="/pay" element={<Payment />} />
        <Route path="/password" element={<Password />} />
        <Route path="/tr" element={<TransactionBox />} />
        <Route path="/coment" element={<Ulasan />} />
        <Route path="/akun" element={<Akun />} />
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
        <Route path="/DPel" element={<DPelatihan />} />
        <Route path="/registrasi" element={<Registrasi />} />
        <Route path="/pembayaran" element={<Pembayaran />} />
        <Route path="/banktransfer" element={<BankTransfer />} />
        <Route path="/Ewallet" element={<Ewallet />} />
        <Route path="/Creditcard" element={<Creditcard />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/rkuis" element={<Riwayat />} />
        <Route path="/det" element={<DetailP />} />
        <Route path="/content-isi-pengetahuan" element={<Isipengetahuan />} />
        <Route path="/jdk" element={<Detailjawaban />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

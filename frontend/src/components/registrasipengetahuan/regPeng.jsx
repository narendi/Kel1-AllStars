import React from "react";
import { Button } from "@material-tailwind/react";
// Import other necessary components or styling frameworks if needed

const Rrp = () => {
  return (
    <>
    <p className="font-bold text-2xl ml-14 mt-6">Register</p>
    <div className="grid grid-cols-2 gap-1">   
          <img className="ml-14 mt-8" style={{width: "550px"}} src="../../public/assets/konten/konten1.jpg" alt="gambar" />

          <div className="mt-2 ml-4 text-sm ">
            <div className="grid grid-cols-6">
              <p className="font-bold"> Ditail Pembeli</p>
              <p/> <p/> <p/> <p/>
              <button className=" text-sm hover:text-white hover:bg-black hover:border-transparent py-1 px-1 rounded">Edit</button>
            </div>

          <div className="border border-black p-4 grid grid-cols-2 gap-1">
            <p className="text-black font-bold">Nama Lengkap</p>
            <p className="text-black ">Mary Jane</p>

            <p className="text-black font-bold mt-2">Email</p>
            <p className="text-black mt-2">Mj@gmail.com</p>

            <p className="text-black font-bold mt-2">Nomor HandPhone</p>
            <p className="text-black mt-2">085634579123</p>
          </div>


          <p className="font-bold mt-3">Detail Pesanan</p>
          <div className="border border-black p-4 grid grid-cols-2 gap-1">
            <p className="text-black font-bold">Judul</p>
            <p className="text-black ">El Clasico</p>

            <p className="text-black font-bold mt-2">Kategori</p>
            <p className="text-black mt-2">Kategori 1</p>

            <p className="text-black font-bold mt-2">Masa berlaku lisensi</p>
            <p className="text-black mt-2">Selamanya</p>

            <p className="text-black font-bold mt-2">Harga</p>
            <p className="text-black mt-2">Rp: 100.000</p>
          </div>
          <br />
          <div className="grid grid-cols-3">
            <div>
              </div>
            <div>
              </div>
            <div>
            <button className="w-full border border-black text-sm hover:text-white hover:bg-black hover:border-transparent py-1 px-4">Bayar</button>
            </div>
          </div>
          </div>

    </div>
    <br />
    <br />
    <br />
    <br />
    </>
  );
};

export default Rrp;
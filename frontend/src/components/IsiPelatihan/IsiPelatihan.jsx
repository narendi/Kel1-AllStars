import React, { useState } from "react";
import Bpelatihan from "./Border";
import PelatihanS from "./PelatihanSelesai";
import PelatihanB from "./PelatihanBerjalan";
import DetailP from "../DetailPelatihan/Detail";

const IPelatihan = () => {
  const [activeContent, setActiveContent] = useState("semua");

  return (
    <>
      <div>
        <p className="font-bold text-2xl ml-6 mt-6">Pelatihan Saya</p>
        <div className="space-y-6 mx-4">
          <button
            className={`bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded mx-2 ${
              activeContent === "semua" ? "bg-gray-600" : ""
            }`}
            onClick={() => setActiveContent("semua")}
          >
            Semua Pelatihan
          </button>
          <button
            className={`bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded mx-2 ${
              activeContent === "berjalan" ? "bg-gray-600" : ""
            }`}
            onClick={() => setActiveContent("berjalan")}
          >
            Pelatihan Sedang Berjalan
          </button>
          <button
            className={`bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded mx-2 ${
              activeContent === "selesai" ? "bg-gray-600" : ""
            }`}
            onClick={() => setActiveContent("selesai")}
          >
            Pelatihan Selesai
          </button>
        </div>
        <div className="mx-8">
          {activeContent === "semua" && (
            <>
              <Bpelatihan />
              <PelatihanB />
              <PelatihanS />
            </>
          )}
          {activeContent === "berjalan" && <PelatihanB />}
          {activeContent === "selesai" && <PelatihanS />}
        </div>
      </div>
    </>
  );
};

export default IPelatihan;

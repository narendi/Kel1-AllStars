import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const RiwayatKuis = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="flex flex-col">
        <p className="text-2xl mb-2 font-bold">Lorem Ipsum</p>
        <p>
          Nilai yang ditampilkan adalah nilai yang tertinggi pada setiap test
        </p>
      </div>

      <div
        className={`px-4 pt-4 mx-4 my-4 bg-white shadow-md border border-gray-300 rounded-md cursor-pointer ${
          expanded ? "pb-4" : ""
        }`}
        onClick={toggleExpand}
      >
        <div className="flex">
          <FontAwesomeIcon
            icon={expanded ? faChevronUp : faChevronDown}
            className="text-xl mx-2 mt-1 transition-transform duration-300 transform"
          />
          <div className="flex-col items-center justify-between">
            <h2 className="text-lg font-semibold mb-5 transform">Kuis</h2>
            <p>Batas nilai minimum yang harus dipenuhi (75)</p>
          </div>
          <div className="flex flex-col mr-4 ml-auto justify-center">
            <div className="flex px-4 py-4 h-16 w-16 justify-center items-center border border-black rounded-full">
              <p>100</p>
            </div>
            <div className="flex justify-center">
              <p>Nilai Test</p>
            </div>
          </div>
        </div>
        <div
          className={`mt-4 transition-max-height duration-300 ease-in-out overflow-hidden ${
            expanded ? "max-h-48" : "max-h-0"
          }`}
        >
          {/* Opsi-opsi lainnya */}
          <div className="flex border-t border-black">
            <div className="ml-4 my-4 p-4 w-4 h-4 flex justify-center items-center  border border-black rounded-full">
              <p className="flex justify-center items-center">1</p>
            </div>
            <div className="m-4">
              <p>16 Januari 2023 03.25</p>
              <a href="" className="text-sm">
                Lihat Detail Kuis
              </a>
            </div>
            <div className="flex ml-auto my-4 h-16 w-16 mr-6 justify-center items-center border border-black rounded-full">
              <p className="flex justify-center items-center">100</p>
            </div>
          </div>

          <div className="flex border-t border-black">
            <div className="ml-4 my-4 p-4 w-4 h-4 flex justify-center items-center  border border-black rounded-full">
              <p className="flex justify-center items-center">2</p>
            </div>
            <div className="m-4">
              <p>10 Januari 2023 03.25</p>
              <a href="" className="text-sm">
                Lihat Detail Kuis
              </a>
            </div>
            <div className="flex ml-auto mt-4 h-16 w-16 mr-6 justify-center items-center border border-black rounded-full">
              <p className="flex justify-center items-center">50</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RiwayatKuis;

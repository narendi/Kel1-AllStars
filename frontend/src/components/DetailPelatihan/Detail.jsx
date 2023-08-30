import React from "react";
import { Pagination } from "antd";


const DetailP = () => {
  return (
    <div>
      <p className="font-bold text-2xl ml-6 mt-6">Orang Gila</p>
      <div className="bg-white w-[70rem] h-[25rem] rounded-lg border border-gray-300 p-6 py-4 mt-6 mx-4 max-w-full flex">
      <div>
          <div className="flex justify-between items-start">
            <div>
              <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-8 rounded">
                Riwayat Kuis
              </button>
            </div>
            <div>
              <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-8 rounded">
                Pencarian
              </button>
            </div>
          </div>
          <hr className="w-[65rem] mt-6 border-gray-300" />
          <div className="flex justify-between mt-4 items-center w-full">
            <div>
              <p className="font-bold">Modul</p>
            </div>
            <div>
              <p className="font-bold">Terakhir Diperbaharui</p>
            </div>
            <div>
              <p className="font-bold">Progres</p>
            </div>
          </div>
          <hr className="w-[65rem] mt-6 border-gray-300" />
          <div className="flex justify-between items-center w-full ">
            <div>
              <p className="mt-4">Modul 1</p>
              <p className="mt-4">Modul 2</p>
              <p className="mt-4">Modul 3</p>
            </div>
            <div>
              <p className="mt-4">90-47-2097</p>
              <p className="mt-4">74-44-2099</p>
              <p className="mt-4">36-33-3090</p>
            </div>
            <div className="mt-4 w-20">
              <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200 mb-2">
                <div
                  style={{ width: "100%" }}
                  className="shadow-none flex flex-col text-right whitespace-nowrap text-white justify-center bg-black"
                ></div>
              </div>
              <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200 mt-6">
                <div
                  style={{ width: "100%" }}
                  className="shadow-none flex flex-col text-right whitespace-nowrap text-white justify-center bg-black"
                ></div>
              </div>
              <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200 mt-8">
              <div
                  style={{ width: "100%" }}
                  className="shadow-none flex flex-col text-right whitespace-nowrap text-white justify-center bg-black"
                >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex justify-end">
        <Pagination total={500} />
      </div>
    </div>
    
  );
};

export default DetailP;

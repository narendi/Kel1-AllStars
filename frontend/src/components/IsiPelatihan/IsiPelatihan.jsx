import React from "react";
import Bpelatihan from "./Border";

const IPelatihan = () =>{
    return(
        <>
        <div>
            <p className="font-bold text-2x1 ml-6 mt-6 ">Pelatihan Saya</p>
            <div className="space-y-6 mx-4">
                <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded mx-2">
                    Semua Pelatihan
                </button>
                <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded mx-2">
                    Pelatihan Sedang Berjalan
                </button>
                <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded mx-2">
                    Pelatihan Selesai
                </button>
            </div>
            <div className="mx-8">
               <Bpelatihan />
            </div>
        </div>
        </>
    )
}

export default IPelatihan;
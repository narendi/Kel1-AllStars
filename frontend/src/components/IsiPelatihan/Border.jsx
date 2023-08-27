import React from "react";
import { useNavigate } from "react-router-dom";

const Bpelatihan = () => {
    const Navigate = useNavigate()

    return (
        <div className="container mx-auto mt-6 ">
            
            <div className="bg-white w-[85rem] rounded-lg border border-gray-300 p-6 max-w-full flex">
                {/* Card di Bagian Kiri Border */}
                <div className="w-1/4 bg-gray-100 border-r-2 border-gray-300 p-4">
                    {/* Isi konten untuk card */}
                    <p>Ini adalah konten card di bagian kiri.</p>
                </div>
                
                {/* Konten Utama */}
                <div className="w-3/4 p-4">
                    <h2 className="text-2xl font-bold mb-4">Judul Pelatihan</h2>
                    <p className="text-gray-700">
                        RAFFA GANTENG UNLIMITED
                    </p>
                    <br />
                    <br />
                    <p>Diakses : 34 Agustus 2990</p>
                    <p>Selesai : - </p>
                    
                    {/* Progres Bar */}
                    <div className="mt-4">
                        <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">
                                <div />
                                <div className="text-right">
                                    <span className="text-xs font-semibold inline-block text-gray-600">
                                        75%
                                    </span>
                                </div>
                            </div>
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                                <div style={{ width: "75%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-black"></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-4 flex justify-right"> 
                        <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
                            Lihat Materi
                        </button>
                        <button onClick={() => Navigate('/#')} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded ml-8">
                            Detail
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bpelatihan;

import React from "react";

const PelatihanS = () => {
    return (
        <div className="container mx-auto mt-6">
        <div className="bg-white w-[70rem] rounded-lg border border-gray-300 p-6 max-w-full flex">
       <div className="w-1/4 p-4">      
        <img
                        src="https://3.bp.blogspot.com/-6tHuueFntKE/VtpyQahFB4I/AAAAAAAAAFU/LUyVSVj1s60/s1600/gambar-wallpaper-yang-cantik.jpg"
                        alt="Konten Card"
                        className="max-w-full"
                    />
        </div>
                

        <div className="w-3/4 p-4">
            <h2 className="text-2xl font-bold mb-4">Judul Pelatihan</h2>
            <p className="text-gray-700">
                fersdftgyrdytyhffg5rtyh6rfgtrf
            </p>
            <br />
            <br />
            <p>Diakses : 34 Agustus 2990</p>
            <p>Selesai : - </p>
                    
                   
        <div className="mt-4">
        <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
        <div />
        <div className="text-right">
            <span className="text-xs font-semibold inline-block text-gray-600">
                100%
            </span>
        </div>
        </div>
        <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
        <div style={{ width: "100%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-black"></div>
        </div>
        </div>
        </div>
                    
        <div className="mt-4 flex justify-right"> 
            <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
                Lihat Materi
            </button>
            <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-8 rounded ml-8">
                Detail
            </button>
        </div>
        </div>
        </div>
        </div>
    );
};

export default PelatihanS;

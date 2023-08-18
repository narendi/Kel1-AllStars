import React from "react";

const Bpelatihan = () => {
    return (
        <div className="container mx-auto mt-6">
            <div className="bg-white w-[70rem] rounded-lg border border-gray-300 p-6 max-w-full">
                {/* Konten card */}
                <h2 className="text-2xl font-bold mb-4">Judul Pelatihan</h2>
                <p className="text-gray-700">
                    fersdftgyrdytyhffg5rtyh6rfgtrf
                </p>
                <br />
                <br />
                <p>uyfveeuw</p>
                <p>uerfuye</p>
                {/* Progres bar */}
                <div>
                    <div className="relative pt-1">
                        <div className="flex mb-2 items-center justify-between">
                            <div />
                            <div className="text-right">
                                <span className="text-xs font-semibold inline-block text-gray-600">
                                    60%
                                </span>
                            </div>
                        </div>
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                            <div style={{ width: "60%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-black"></div>
                        </div>
                    </div>
                </div>
                {/* Button */}
                <div className="mt-4 flex justify-right"> 
                    <button className="bg-gray-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        Tombol 1
                    </button>
                    <button className="bg-gray-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded ml-2">
                        Tombol 2
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Bpelatihan;

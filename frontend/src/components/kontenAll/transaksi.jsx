import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button } from "antd";
import { useNavigate } from "react-router-dom";

const TransactionBox = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const fixedPrice = "100.000";
  const navigate = useNavigate();
  const [newdata, setNewData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3100/detaill/all")
      .then((response) => {
        setNewData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleBuy = () => {
    navigate("/rrq");
  };

  return (
    <>
      {newdata.map((item) => (
        <div style={{ float: "right", marginRight: "20px" }}>
          <div className="w-[332px] h-[168px] p-4 bg-white shadow rounded mt-20">
            <div className="font-bold mb-4">
              Pembuat
              <hr className="text-black mt-3" />
            </div>
            <div className="flex items-center mb-4">
              <div className="mt-12">Tanggal dibuat: {item.tanggalbuat}</div>
            </div>
          </div>

          <div className="mt-12">
            <div className="text-lg font-bold">Yang kamu dapatkan:</div>
            <div className="w-[335px] h-[198px] p-4 bg-white shadow rounded mt-7 text-sm">
              <div className="flex flex-col p-3 ">
                <li className="mb-2">4 menit total video pembelajaran</li>
                <li className="mb-2">5 bahan bacaan</li>
                <li className="mb-2">5 konten dapat diunduh</li>
                <li className="mb-2">Kuis yang dapat dikerjakan</li>
                <li>Sertifikat dapat diunduh</li>
              </div>
            </div>
          </div>

          <div className="w-[335px] h-[198px] p-4 bg-white shadow rounded mt-12">
            <div className="font-bold mb-4">
              Transaksi
              <hr className="text-black" />
            </div>
            <div className="flex items-center mb-4">
              <div className="flex-grow">Harga</div>
              <div className="mr-2 font-extrabold">Rp. {item.harga}</div>
            </div>

            <button
              className="bg-red-600 hover:bg-red-500 text-white rounded-md w-[303px] h-[44px] mt-8"
              onClick={handleBuy}
            >
              Beli sekarang
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default TransactionBox;

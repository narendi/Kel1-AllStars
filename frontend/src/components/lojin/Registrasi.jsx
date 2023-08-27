import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { DatePicker, Space } from "antd";

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3100/login", {
        identifier,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("userIdentifier", identifier);
        navigate("/home");
      }
    } catch (error) {
      setErrorMessage("Invalid email/username or password.");
    }
  };
  return (
    <>
      <form
        onSubmit={handleLogin}
        className="border w-[40%] bg-white border-black h-auto "
      >
        <div className="">
          <div className="font-bold text-2xl p-5">Daftar Akun Baru</div>
        </div>
        <div className="mt-2 flex flex-col p-5">
          <label>Nama Lengkap</label>
          <input type="text" className="rounded" placeholder="Masukan Nama" />
        </div>
        <div className="mt-2 flex flex-col p-5">
          <label>Email</label>
          <input type="email" className="rounded" placeholder="Masukan Email" />
        </div>
        <div className="mt-2 flex flex-col p-5">
          <label>No Telepon</label>
          <input
            type="text"
            className="rounded"
            placeholder="Masukan No Telepon"
          />
        </div>
        <div className="mt-2 flex flex-col p-5">
          <label>Tanggal Lahir</label>
          <Space direction="vertical">
            <DatePicker className="w-full h-11 border border-gray-500 text-gray-400 hover:border-blue-600" />
          </Space>
        </div>
        <div className="mt-2 flex flex-col p-5">
          <label>Negara</label>
          <input type="text" className="rounded" placeholder="Asal Negara" />
        </div>
        <div className="mt-2 flex flex-col p-5">
          <label>Domisili</label>
          <input type="text" className="rounded" placeholder="Asal Kota" />
        </div>
        <div className="mt-2 flex flex-col p-5">
          <label>Kata Sandi</label>
          <input
            type="password"
            className="rounded"
            placeholder="Masukan Kata Sandi"
          />
        </div>
        <div className="mt-2 flex flex-col p-5">
          <label>Konfirmasi Kata Sandi</label>
          <input
            type="password"
            className="rounded"
            placeholder="Konfirmasi Kata Sandi"
          />
        </div>

        <div className="flex justify-center mt-5 mb-5">
          <button
            type="submit"
            className="border border-black w-64 py-1 rounded"
          >
            Daftar
          </button>
        </div>
      </form>
    </>
  );
};
export default Login;

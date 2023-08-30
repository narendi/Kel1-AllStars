import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { DatePicker, Space } from "antd";

const Daftar = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [no_telepon, setNo_Telepon] = useState("");
  const [tanggal_lahir, setTanggal_lahir] = useState(null);
  const [negara, setNegara] = useState("");
  const [domisili, setDomisili] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Password Tidak Sama");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3100/register", {
        username,
        email,
        password,
        no_telepon,
        tanggal_lahir: tanggal_lahir
          ? tanggal_lahir.format("YYYY-MM-DD")
          : null,
        negara,
        domisili,
      });

      if (response.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      setErrorMessage("An error occurred during registration.");
    }
  };
  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSignup}
        className="border w-[40%] bg-white border-black h-auto "
      >
        <div className="">
          <div className="font-bold text-2xl p-5">Daftar Akun Baru</div>
        </div>
        <div className="mt-2 flex flex-col p-5">
          <label>Nama Lengkap</label>
          <input
            type="text"
            className="rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Masukan Nama"
          />
        </div>
        <div className="mt-2 flex flex-col p-5">
          <label>Email</label>
          <input
            type="email"
            className="rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Masukan Email"
          />
        </div>
        <div className="mt-2 flex flex-col p-5">
          <label>No Telepon</label>
          <input
            type="text"
            className="rounded"
            value={no_telepon}
            onChange={(e) => setNo_Telepon(e.target.value)}
            placeholder="Masukan No Telepon"
          />
        </div>
        <div className="mt-2 flex flex-col p-5">
          <label>Tanggal Lahir</label>
          <Space direction="vertical">
            <DatePicker
              className="w-full h-11 border border-gray-500 text-gray-400 hover:border-blue-600"
              value={tanggal_lahir}
              onChange={(date) => setTanggal_lahir(date)}
            />
          </Space>
        </div>
        <div className="mt-2 flex flex-col p-5">
          <label>Negara</label>
          <input
            type="text"
            className="rounded"
            value={negara}
            onChange={(e) => setNegara(e.target.value)}
            placeholder="Asal Negara"
          />
        </div>
        <div className="mt-2 flex flex-col p-5">
          <label>Domisili</label>
          <input
            type="text"
            className="rounded"
            value={domisili}
            onChange={(e) => setDomisili(e.target.value)}
            placeholder="Asal Kota"
          />
        </div>
        <div className="mt-2 flex flex-col p-5">
          <label>Kata Sandi</label>
          <input
            type="password"
            className="rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Masukan Kata Sandi"
          />
        </div>
        <div className="mt-2 flex flex-col p-5">
          <label>Konfirmasi Kata Sandi</label>
          <input
            type="password"
            className="rounded"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </form>
    </div>
  );
};
export default Daftar;

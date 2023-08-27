import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  return (
    <>
      <form className="border w-[40%] bg-white border-black h-auto ">
        <div className="flex justify-between">
          <div className="font-bold text-2xl p-5">Login</div>
          <Link to="/registrasi">
            <button className="p-5">Daftar Akun Baru</button>
          </Link>
        </div>
        <div className="mt-4 flex flex-col p-5">
          <label>Username</label>
          <input
            type="text"
            className="rounded"
            placeholder="Masukan Username/Email"
          />
        </div>
        <div className="mt-4 flex flex-col p-5">
          <label>Password</label>
          <input
            type="password"
            className="rounded"
            placeholder="Masukan Kata Sandi"
          />
        </div>

        <div className="flex justify-center mt-5 mb-5">
          <button type="submit" className="border w-64 py-1 rounded">
            Login
          </button>
        </div>

        <div className="flex items-center">
          <div className="w-1/2 h-px bg-gray-400"></div>
          <div className="px-4 text-gray-600">atau</div>
          <div className="w-1/2 h-px bg-gray-400"></div>
        </div>

        <div className="flex justify-center mt-5 mb-5">
          <button className="border px-4 py-2">Login dengan Google</button>
        </div>
        <div className="flex justify-center mt-5 mb-5">
          <button className="border px-4 py-2">Login dengan Facebook</button>
        </div>

        <div className="flex items-center">
          <div className="w-1/2 h-px bg-gray-400"></div>
          <div className="px-4 text-gray-600">atau</div>
          <div className="w-1/2 h-px bg-gray-400"></div>
        </div>

        <div className="flex justify-center mb-10 mt-3">
          Masuk ke halaman
          <Link to="/">
            <a className="ml-2 text-blue-500">Kelola Training</a>
          </Link>
        </div>
      </form>
    </>
  );
};
export default Login;

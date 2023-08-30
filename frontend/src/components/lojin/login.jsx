import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import FacebookLogin from "@greatsumini/react-facebook-login";
import Logo from "/logofb.png";

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
      setErrorMessage(
        "kemungkinan salah ada di email/username ataupun password."
      );
    }
  };
  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="border w-[40%] bg-white border-black h-auto "
      >
        <div className="flex justify-between">
          <div className="font-bold text-2xl p-5">Login</div>
          <Link to="/registrasi">
            <button className="p-5">Daftar Akun Baru</button>
          </Link>
        </div>
        <div className="mt-4 flex flex-col p-5">
          <label>Username/email</label>
          <input
            type="text"
            className="rounded"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            required
            placeholder="Masukan Username/Email"
          />
        </div>
        <div className="mt-4 flex flex-col p-5">
          <label>Password</label>
          <input
            type="password"
            className="rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Masukan Kata Sandi"
          />
        </div>

        <div className="flex justify-center mt-5 mb-5">
          <button type="submit" className="border w-64 py-1 rounded">
            Login
          </button>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </div>

        <div className="flex items-center">
          <div className="w-1/2 h-px bg-gray-400"></div>
          <div className="px-4 text-gray-600">atau</div>
          <div className="w-1/2 h-px bg-gray-400"></div>
        </div>

        <div className="flex justify-center mt-5 mb-5">
          <GoogleOAuthProvider
            className="border w-[50%]"
            clientId="532080741227-gecfvvisqihaqbbce9a6ph15ppt3nscu.apps.googleusercontent.com"
          >
            <GoogleLogin
              className="border w-[50%]"
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);

                navigate("/home");
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </GoogleOAuthProvider>
        </div>
        <div className="flex justify-center mt-5 mb-5 ">
          <FacebookLogin
            className="py-2 border w-[42%] rounded bg-blue-800 text-white"
            appId="1020601108938950"
            onSuccess={(response) => {
              navigate("/home");

              console.log("Login Success!", response);
            }}
            onFail={(error) => {
              console.log("Login Failed!", error);
            }}
            onProfileSuccess={(response) => {
              console.log("Get Profile Success!", response);
            }}
          />
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
    </div>
  );
};
export default Login;

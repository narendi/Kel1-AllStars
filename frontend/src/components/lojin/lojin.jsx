import React from "react";

const Lojin = () => {
  
    
    return (
        <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
            className="fixed inset-0 w-full h-full bg-black opacity-40"
            onClick={() => setShowModal(false)}
        ></div>
        <div class="rounded-lg shadow-md box-content h-96 w-96 p-4  absolute  inset-0  left-96 top-16 object-none object-center bg-white ...">
<div className="flex justify-between items-center">
<p className="text-block mt-1 leading-tight font-semibold text-2xl text-gray-900">Login</p>

<button
    className="px-6 py-3 text-gray-900 hover:underline"
    type="button"
    onClick={() => setShowDaftar(true)}
>
    Daftar Akun Baru
</button>

</div>
<div>
 <label  class="text-sm text-gray-900 dark:text-white">Username</label>
 <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" Username atau email NusaLMS" required>
 </input>
</div>
 <label  class="text-sm text-gray-900 dark:text-white">Password</label>
 <input type="password" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password NusaLMS" required>
 </input>
<div class="inline-flex items-center justify-center w-full h-7">
</div>
<div class="inline-flex items-center justify-center w-full h-7">
<div class="flex justify-center">
 <a href="home" class="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-500 font-medium rounded text-lg px-5 py-1.2 mr-2 mb-1 dark:bg-green-500 dark:hover:bg-green-500 focus:outline-none dark:focus:ring-green-800 w-64 h-7 text-center">Login</a>
</div>
</div>

<div class="inline-flex items-center justify-center w-full h-7">
 <hr class="w-96 h-px my-8 bg-gray-400 border-0 dark:bg-gray-700"></hr>
 <span class="absolute px-3 font-medium text-gray-400 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">atau</span>
</div>
<div class="inline-flex items-center justify-center w-full h-7">
<a href="https://www.google.com" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-base px-5 py-1.2 mr-2 mb-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-96 h-7 text-center"> Masuk dengan Google</a>
</div>
<div class="inline-flex items-center justify-center w-full h-7">
 <a href="https://www.facebook.com" class="text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:ring-blue-300 font-medium text-base px-5 py-1.2 mr-2 mb-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-96 h-7 text-center">Masuk dengan Facebook</a>
</div>
<div class="inline-flex items-center justify-center w-full h-7">
 <hr class="w-96 h-px my-8 bg-gray-400 border-0 dark:bg-gray-700"></hr>
 <span class="absolute px-3 font-medium text-gray-400 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">atau</span>
</div>
<p class="text-center">
   Masuk ke halaman <a href="All" class="font-medium text-blue-900 dark:text-blue-500 hover:underline ">kelola training
</a>
</p>
</div>
</div>
    );
};
export default Lojin;
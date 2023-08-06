import React from "react";

const DaftarAkun = () => {
  return (
       <div className="absolute  min-h-screen  w-screen bg-gray-300">
          <div class="rounded-lg shadow-md box-content h-screen w-96 p-4  absolute  inset-0  left-96  object-none object-center bg-white ...">
              <div class="flex justify-between">
                   <p class="text block mt-1 leading-tight font-semibold text-xl text-gray-900">Daftar akun baru</p>
              </div>
              <label class="text-sm text-gray-900 dark:text-white">Nama Lengkap</label>
                    <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nama Lengkap" required>
              </input>
              <label  class="text-sm text-gray-900 dark:text-white">Email</label>
                     <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required>
              </input>
              <label class="text-sm text-gray-900 dark:text-white">Nomor Telepon</label>
                     <input type="text"class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nomor Telepon" required>
              </input>
              <label  class="text-sm text-gray-900 dark:text-white">Tanggal Lahir</label>
                     <input type="text"class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required>
              </input>
              <label  class="text-sm text-gray-900 dark:text-white">Negara</label>
                     <input type="text"class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Negara" required>
              </input>
              <label class="text-sm text-gray-900 dark:text-white">Domisili</label>
                     <input type="text"class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Domisili" required>
              </input>
              <label class="text-sm text-gray-900 dark:text-white">Kata Sandi</label>
                     <input type="password" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kata Sandi" required>
              </input>
              <label class="text-sm text-gray-900 dark:text-white">Konfirmasi Kata Sandi</label>
                     <input type="password" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Konfirmasi Kata Sandi" required>
              </input>
              <div class="inline-flex items-center justify-center w-full h-1"></div>
              <div class="flex justify-center">
                     <a href="login" class="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-500 font-medium rounded text-lg px-5 py-1.2 mr-2 mb-1 dark:bg-green-500 dark:hover:bg-green-500 focus:outline-none dark:focus:ring-green-800 w-64 h-7 text-center">Daftar</a>    
              </div>            
         </div>
    </div>
  );
};

export default DaftarAkun;

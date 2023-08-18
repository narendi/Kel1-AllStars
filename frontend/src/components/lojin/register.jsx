import React from "react";

const Register = () => {
 return (
        <div className="fixed inset-0 z-40 overflow-y-auto">
        <div
            className="fixed inset-0 w-full h-full bg-black opacity-40"
            onClick={() => setShowDaftar(false)}
        ></div>
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
<label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal Lahir</label>
<div class="flex justify-between">
 <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-27 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Tanggal</option>
    <option value>31</option> <option value>30</option> <option value>29</option> <option value>28</option> <option value>27</option> <option value>26</option> <option value>25</option> <option value>24</option> <option value>23</option> <option value>22</option> <option value>21</option> <option value>20</option> <option value>19</option> <option value>18</option> <option value>17</option> <option value>16</option> <option value>15</option> <option value>14</option> <option value>13</option> <option value>12</option> <option value>11</option> <option value>10</option> <option value>09</option> <option value>08</option> <option value>07</option> <option value>06</option> <option value>05</option> <option value>04</option> <option value>03</option> <option value>02</option><option value>01</option>
  </select>
  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-27 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
     <option selected>bulan</option>
    <option value>Januari</option> <option value>Februari</option> <option value>Maret</option> <option value>April</option> <option value>Mei</option> <option value>Juni</option> <option value>Juli</option> <option value>Agustus</option> <option value>September</option> <option value>Oktober</option> <option value>November</option> <option value>Desember</option>
</select>
<select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-24 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
   <option selected>tahun</option>
   <option value>1990</option> <option value>1991</option> <option value>1992</option> <option value>1993</option> <option value>1994</option> <option value>1995</option> <option value>1996</option> <option value>1997</option> <option value>1998</option> <option value>1999</option> <option value>2000</option> <option value>2001</option> <option value>2002</option> <option value>2003</option> <option value>2004</option> <option value>2005</option> <option value>2006</option> <option value>2007</option> <option value>2008</option> <option value>2009</option> <option value>2010</option>
</select>
</div>
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
<a href="#" class="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-500 font-medium rounded text-lg px-5 py-1.2 mr-2 mb-1 dark:bg-green-500 dark:hover:bg-green-500 focus:outline-none dark:focus:ring-green-800 w-64 h-7 text-center"
onClick={() => setShowDaftar(false)}>
           Daftar
</a>
</div>            
</div>
</div>
    );
};
export default Register;
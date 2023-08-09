import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Chip,
  Button,
} from "@material-tailwind/react";


const ContentAdminFinal = () => {
  const [showDaftar, setShowDaftar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <React.Fragment>
     
      <Card className="w-full max-w-[150rem] flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src="https://media.licdn.com/dms/image/C511BAQHfU6AoxPa7zA/company-background_10000/0/1586503736552?e=1691226000&v=beta&t=jLA49Axm69_E7zlPnqHANvBONOC0B-cCHkxrAT--sz0"
            alt="card-image"
            className="h-full w-full object-cover rounded-2xl"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Banner Iklan
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            condimentum aliquet arcu, sit amet eleifend tortor. Donec elementum
            enim quis ligula laoreet convallis. Fusce sodales ligula ut nibh
            finibus, at ultricies odio interdum. Etiam ac sapien euismod,
            fringilla lacus nec, feugiat massa. Suspendisse in arcu enim. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Fusce aliquet malesuada quam, ut hendrerit risus
            eleifend in. Nulla facilisi. Aliquam tincidunt odio nunc, sit amet
            feugiat quam convallis nec. Morbi laoreet nunc sed lacus elementum
            lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Donec varius libero augue, eget
            varius tellus cursus non.
          </Typography>
          <a href="#" className="inline-block">
            <Button variant="text" className="flex items-center gap-5">
              Baca Selengkapnya
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-11 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
     </CardBody>     
        </Card>

        <>
          <div className="flex items-center justify-center h-60">
                <button
                    className="px-6 py-3 text-gray-900 fixed top-1 right-3 hover:text-blue-500"
                    type="button"
                    onClick={() => setShowModal(true)}
                >
                    Login
                </button>
            </div>
            {showModal ? (
                <>
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
                </>
            ) : null}
        </>


        <>
            {showDaftar ? (
                <>
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
              </>
            ) : null}
        </>
        
    
    </React.Fragment>
     
  );
};

export default ContentAdminFinal;

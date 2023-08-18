import React from "react";
import FooterColumn from "../layout/footer/footer";
import { FaChevronRight } from "react-icons/fa";

const Pembayaran = () => {

return(
   <div class="bg-gray-100 absolute  w-full h-full ">
      <div class="rounded-md  box-content h-96 w-96 p-4  absolute  left-96 top-0 object-none object-center bg-white ...">
         <div class="bg-blue-500 rounded-md absolute top-0 left-0 w-full h-16">
            <h1 class="absolute top-3 left-12 text-white font-semibold">NusaKMS</h1>
         </div>
         <div class="bg-white absolute top-10 border border-gray-900 rounded-md left-12 w-80 h-16 z-10 mx-auto ">
            <div class="bg-white absolute top-1 left-3 w-72 h-12">
               <p class="text-sm "> Total</p>
               <h1 class="text-sm font-semibold ">Rp 100,000</h1>
               <p class="text-xs ">order ID#wWwTsA</p>
               <p class="text-xs absolute right-0 top-0 ">Choose  within 23:59:59</p>
            </div>
         </div>
         <p class="text-xs absolute top-28">Pilih metode pembayaran</p>
         <div class="bg-gray-100 absolute top-32   left-0 w-full h-[65px] z-10 mx-auto">
            <a href="" className="w-3 h-3 rounded-full absolute top-1 left-96 transition duration-300 transform hover:scale-110 hover:bg-gray-300">
               <FaChevronRight size={14} color="black" />
            </a>
            <hr className="border border-b absolute top-0 border-gray-900  w-full " />
            <p class="text-xs font-semibold absolute top-1 left-3">Credit/Debit Card</p>
            <div className="flex space-x-3 absolute top-[30px] left-3">
            <a href="Creditcard">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1280px-Visa_Inc._logo.svg.png" alt="Image Description" class="w-[55px] h-[20px]" />
            </a>
            <a href="https://www.example.com">
               <img src="https://static-00.iconduck.com/assets.00/mastercard-icon-2048x1225-3kb6axel.png" alt="Image Description" class="w-[55px] h-[25px]" />
            </a>
            </div>
         </div>
         <div class="bg-gray-50 absolute top-48 left-0 w-full h-[65px] z-10 mx-auto">
            <a href="" className="w-3 h-3 rounded-full absolute top-1 left-96 transition duration-300 transform hover:scale-110 hover:bg-gray-300">
               <FaChevronRight size={14} color="black" />
            </a>
            <hr className="border border-b absolute top-0 border-gray-900 w-full " />
            <p class="text-xs font-semibold absolute top-1 left-3">Bank Transfer</p>
            <div className="flex space-x-3 absolute top-3 left-3">
            <a href="banktransfer">
               <img src="https://www.freepnglogos.com/uploads/logo-bca-png/bank-central-asia-logo-bank-central-asia-bca-format-cdr-png-gudril-1.png" alt="Image Description" class="w-[55px] h-[55px]" />
            </a>
            <a href="https://www.example.com">
               <img src="https://blogger.googleusercontent.com/img/a/AVvXsEiL-Z4N4ZWA1XzsRey-BtSFNExzQoAG2uAeL7dPDHJdgGs9DC7JhGgvu3qWs7uyQBuuKKBIZvNiL1BtT70JIgM4xWOw4zJegKAtf6Gp1jIIXN_nhCj32CZCKt1iC1JQD2rW4VT9HxGWD1zPSs030CiphPTU7CGD-aq30yPFm2spAhuza9Pb5kfFSJzT1g=w1200-h630-p-k-no-nu" alt="Image Description" class="w-[55px] h-[40px]" />
            </a>
            <a href="https://www.example.com">
               <img src="https://blogger.googleusercontent.com/img/a/AVvXsEiJiuTTGeNBEmRhATgkdM9vQJ37F8AjqKCwn8Hw1_7hF97OwAptW3f95dRVfRydLHfjmP77O_9EpeNcovCXvwKnIGVrriTlZTW-SBLcqSx791gZSnBmfv7uP2jE7RzT-LzY75ZsQ-Fd6p_6pcqNgcjPxMGyYwK1zpRXLIiqI4-ZlcsIj_aZVRq8Hpwj=s16000" alt="Image Description" class="w-[40px] h-[35px]" />
            </a>
            <a href="https://www.example.com" >
               <img src="https://freepngdesign.com/content/uploads/images/p-2813-2-bank-mandiri-logo-png-transparent-logo-699390155888.png" alt="Image Description" class="w-[55px] h-[55px]" />
            </a>
            </div>
         </div>
         <div class="bg-gray-100 absolute top-64 left-0 w-full h-[65px] z-10 mx-auto">
            <a href="" className="w-3 h-3 rounded-full absolute top-1 left-96 transition duration-300 transform hover:scale-110 hover:bg-gray-300">
               <FaChevronRight size={14} color="black" />
            </a>
            <hr className="border border-[0.1px] absolute top-0 border-gray-900 w-full  bg-gray-900 " />
            <p class="text-xs  font-semibold absolute top-2 left-3">E-wallets</p>
            <div className="flex space-x-3 absolute top-[20px] left-3">
            <a href="Ewallet">
               <img src="https://i.pinimg.com/originals/02/8b/92/028b92bb43a9f6c80e26c3ea403cb698.png" alt="Image Description" class="w-[55px] h-[50px]" />
            </a>
            <a href="https://www.example.com" >
               <img src="https://1.bp.blogspot.com/-Iq0Ztu117_8/XzNYaM4ABdI/AAAAAAAAHA0/MabT7B02ErIzty8g26JvnC6cPeBZtATNgCLcBGAsYHQ/s1000/logo-ovo.png" alt="Image Description" class="w-[55px] h-[40px]" />
            </a>
            </div>
            <hr className="border border-b absolute top-16 border-gray-900 w-full" />
         </div>
      </div>
      <div class="absolute bottom-24">
         <FooterColumn/>
      </div>
   </div>
  );
};

export default Pembayaran;
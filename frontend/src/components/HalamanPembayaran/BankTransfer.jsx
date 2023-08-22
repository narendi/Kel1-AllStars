import React, { useState } from 'react';
import "./BankTransfer.css";
import FooterColumn from "../layout/footer/footer";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const BankTransfer = () =>{
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownbuka, setIsDropdownbuka] = useState(false);
  const [isArrowUp, setIsArrowUp] = useState(false);
  const [isArrowtutup, setIsArrowtutup] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsArrowtutup(!isArrowtutup); 
  };
  const bukaDropdown = () => {
    setIsDropdownbuka(!isDropdownbuka);
    setIsArrowUp(!isArrowUp); 
  };
return (
    <div className="h-screen bg-gray-100">
      <div className="w-96 h-96 p-4 bg-white border overflow-y-scroll custom-scrollbar rounded-md relative top-3 left-96">
        <div className="w-[372px] h-16 bg-blue-500 absolute top-0 left-0">
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
        <div className="h-[100px]"></div>
          <h1 class="text-[13px] font-semibold">Bank BCA</h1>
          <p class="text-xs">Complete Payment from BCA to the virtual account number below</p>
        <div className="h-[20px]"></div>
        <div className=" flex items-center">
          <div className="flex-grow">
            <p className="text-xs">Virtual account Number</p>
            <p className="text-[12px]">78987898789</p>
          </div>
            <p className="text-xs">Copy</p>
        </div>
        <div className=" flex items-center block mt-1 mx-auto leading-tight  text-sm text-gray-900 bg-gray-100 w-full py-2 ">
          <div className="flex-grow">
            <p class="text-xs">How to pay</p>
          </div>
            <a
              href=""
              className={`w-3 h-3 rounded-full ml-2 cursor-pointer transition duration-300 transform hover:scale-110 hover:bg-gray-300 ${
              isArrowUp ? 'active' : ''}` // Tambahkan kelas 'active' ketika isArrowUp true
            }
              onClick={(e) => {
              e.preventDefault();
              bukaDropdown();
            }}
          >
            {isArrowUp ? <FaChevronUp size={14} color="black" /> : <FaChevronDown size={14} color="black" />}
          </a>
        </div>
          {isDropdownbuka && (
            <div className="mt-2">
              <div className=''>
                <div className=" flex items-center  block mt-1 mx-auto leading-tight  text-sm text-gray-900 bg-gray-100 w-250px py-2 ">
                <div className="flex-grow">
                  <p className="text-xs cursor-pointer" onClick={toggleDropdown}>
                    ATM BCA
                  </p>
                </div>
                  <a
                     href=""
            className={`w-3 h-3 rounded-full ml-2 cursor-pointer transition duration-300 transform hover:scale-110 hover:bg-gray-300 ${
              isArrowUp ? 'active' : ''}` // Tambahkan kelas 'active' ketika isArrowUp true
            }
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown();
            }}
          >
            {isArrowtutup ? <FaChevronUp size={14} color="black" /> : <FaChevronDown size={14} color="black" />}
          </a>
          </div>
     {isDropdownOpen && (
          <div className="mt-2">
            <a href="#" className="text-xs block">1.Select other transaction on the main menu</a>
            <a href="#" className="text-xs block">2.Select transfer</a>
            <a href="#" className="text-xs block">3.Select to BCA Virtual Account</a>
            <a href="#" className="text-xs block">4.Insert the BCA Virtual Account Number</a>
            <a href="#" className="text-xs block">5.Select the payable amount then confirm</a>
            <a href="#" className="text-xs block">6.Payment Complete</a>
            {/* Tambahkan opsi lain sesuai kebutuhan */}
          </div>
        )}
      </div>
      <div className=" flex items-center block mt-1 mx-auto leading-tight  text-sm text-gray-900 bg-gray-100 w-250px py-2 ">
           <div className="flex-grow">
      <p class="text-xs">Klik BCA</p>
      </div>
      <a
            href=""
            className="w-3 h-3 rounded-full ml-2 cursor-pointer transition duration-300 transform hover:scale-110 hover:bg-gray-300"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <FaChevronDown size={14} color="black" />
          </a>
      </div>
      <div className=" flex items-center block mt-1 mx-auto leading-tight  text-sm text-gray-900 bg-gray-100 w-250px py-2 ">
           <div className="flex-grow">
      <p class="text-xs">m-BCA</p>
      </div>
      <a
            href=""
            className="w-3 h-3 rounded-full ml-2 cursor-pointer transition duration-300 transform hover:scale-110 hover:bg-gray-300"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <FaChevronDown size={14} color="black" />
          </a>
      </div> 
      </div> )}
      <div className="h-[20px]"></div>
      <a href="pembayaran" class="block mt-1 mx-auto leading-tight  text-sm text-white rounded bg-green-500 hover:bg-green-800 w-250px py-2 text-center">Back to Merchant</a>

      </div>
     
      <div class="absolute bottom-24">
         <FooterColumn/>
      </div>
    </div>
  );
};
export default BankTransfer;
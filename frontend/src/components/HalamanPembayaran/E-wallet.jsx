import React, { useState } from 'react';
import "./BankTransfer.css";
import FooterColumn from "../layout/footer/footer";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Ewallet = () =>{
  const [isDropdownbuka, setIsDropdownbuka] = useState(false);
  const [isArrowUp, setIsArrowUp] = useState(false);
 
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
        <div className="h-[90px]"></div>
        <h1 class="text-[13px] font-semibold">Gopay</h1>
        <div class="flex justify-center items-center">
          <img src="https://esportsku.com/tech/wp-content/uploads/2021/11/QR_code_for_mobile_English_Wikipedia.svg.png" alt="Image Description" class="w-[160px] h-[160px]" />
        </div>
        <div className="flex items-center block mt-1 mx-auto leading-tight  text-sm text-gray-900 bg-gray-100 w-250px py-2 ">
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
            <a href="#" className="text-xs block">1.Lorem ipsum dolor sit amet</a>
            <a href="#" className="text-xs block">2.Consectetur adipiscing elit</a>
            <a href="#" className="text-xs block">3.Lorem ipsum dolor sit amet, Consectetur adipiscing elit</a>
            <a href="#" className="text-xs block">4.Proin condimentum aliquet arcu</a>
            <a href="#" className="text-xs block">5.sit amet eleifend tortor</a>
            <a href="#" className="text-xs block">6.Fusce aliquet malesuada quam</a>
          </div>
        )}
      <div className="h-[20px]"></div>
        <a href="pembayaran" class="block mt-1 mx-auto leading-tight  text-sm rounded-md text-white bg-green-500 hover:bg-green-800 w-250px py-2 text-center">Back to Merchant</a>
      </div>
      <div class="absolute bottom-24">
         <FooterColumn/>
      </div>
    </div>
  );
};

export default Ewallet;
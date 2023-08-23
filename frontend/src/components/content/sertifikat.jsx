import React from "react";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const items = [
    {
      key: '0',
      label: (
        <p className="font-bold mb-1">Pilih Kategori</p>
      ),
    },
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Kategori 1
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Kategori 2
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Kategori 3
        </a>
      ),
    },
    {
      key: '4',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Kategori 4
        </a>
      ),
    }
  ];

const Sertifikat = () => {

    return(
        <>
        <div className="mb-2">
            <p className="font-bold text-xl">Sertifikat Saya</p>
        </div>
        <div className="flex mb-3">
            <p className="border border-black mr-2 px-16">Cari Sertifikat</p>
            <div className="border border-black px-16 hover hover:bg-gray-300">
                <Dropdown
                    menu={{
                    items,
                }}
                >
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        Pilih Kategori
                    <DownOutlined />
                    </Space>
                </a>
                </Dropdown>
            </div>
        </div>
        <div className="w-full h-32 flex border border-black rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <img
          className="h-32 w-32 rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
          alt="" />
        <div className="flex flex-col justify-start p-3">
          <p className="mb-2 text-xl font-bold text-neutral-800 dark:text-neutral-50">
            Judul Pelatihan
          </p>
          <button type="button" onClick={() => BUT('#')} className="border border-black rounded-xl hover hover:bg-gray-300">Kategori A</button>
          <p className="mt-2">ID Sertifikat : Unknown</p>
        </div>
        <div className="flex items-center ml-auto">
          <button type="button" onClick={() => BUT('#')} className="border border-black rounded hover hover:bg-gray-300 px-2 ml-auto mr-4">Unduh Sertifikat</button></div>
        </div>
        {/* <div className="flex border border-black bg-white rounded">
            <div className="border border-black">
                <p className="justify-center items-center">Icon Sertifikat</p>
            </div>
            <div className=" p-2">
                <p className="font-bold mb-2 text-xl">Judul Pelatihan</p>
                
                
            </div>
            <button type="button" className="border border-black rounded hover hover:bg-gray-300 px-2 mt-10 mb-10 ml-auto mr-4">Unduh Sertifikat</button>
        </div> */}
    </>
    )
}
export default Sertifikat;
// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSquare } from '@fortawesome/free-solid-svg-icons';
// import { Layout, Space, Dropdown, Checkbox, Row, Col } from 'antd';
// import { DownOutlined } from '@ant-design/icons';
// import 'tailwindcss/tailwind.css';
// import Navbarguest from '../components/layout/navbar/navbarguest';
// import ProductCard from '../components/card/card';

// const { Sider } = Layout;

// const siderStyle = {
//   lineHeight: '25px',
//   color: '#fff',
//   backgroundColor: 'rgb(30 41 59)',
//   height: '37rem',
// };

// const dropdownContentStyle = {
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'flex-end',
// };

// const items = [
//   {
//     label: <a className='text-white ml-6' href="#">Kategori 1</a>,
//     key: '0',
//   },
//   {
//     label: <a className='text-white ml-6' href="#">Kategori 3</a>,
//     key: '1',
//   },
//   {
//     label: <a className='text-white ml-6' href="#">Kategori 3</a>,
//     key: '2',
//   },
//   {
//     label: <a className='text-white ml-6' href="#">Kategori 4</a>,
//     key: '3',
//   },
//   {
//     label: <a className='text-white ml-6' href="#">Kategori 5</a>,
//     key: '4',
//   },
// ];

// const Kategory = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   const handleCategoryClick = (itemKey) => {
//     setSelectedCategory(itemKey === selectedCategory ? null : itemKey);
//   };

//   const products = [
//     // ... (products data remains the same)
//   ];

//   return (
//     <div>
//       <Navbarguest />

//       <div className="flex">
//         {/* Sidebar */}
//         <div className="w-1/4 bg-gray-300 text-black p-4 h-screen" style={{ height: '145vh' }}>
//           <h3 className="text-xl font-semibold mb-4">Filter</h3>
//           <div className="space-y-2">
//             <button className="w-full py-2 px-4 rounded-md bg-gray-200 hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-400">
//               Select Category
//               <svg className="-mr-1 ml-2 h-5 w-5 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                 <path fillRule="evenodd" d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
//               </svg>
//             </button>

//             <div className="mt-2 space-y-1">
//               {items.map((item) => (
//                 <a key={item.key} href={`#category${item.key}`} className="block px-4 py-2 text-sm hover:bg-gray-200 hover:text-black">
//                   <FontAwesomeIcon icon={faSquare} className="mr-2" />
//                   {item.label.props.children}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Daftar Produk dan Sidebar Sbar */}
//         <Sider style={siderStyle}>
//           <div className="text-white  items-center">
//             <div className="mt-4 ml-3 text-2xl">Filter</div>
//             <Dropdown
//               overlayStyle={dropdownContentStyle}
//               overlay={
//                 <div>
//                   {items.map((item) => (
//                     <Row key={item.key} style={{ margin: 0 }} onClick={() => handleCategoryClick(item.key)}>
//                       <Col span={1}>
//                         <Checkbox style={{ margin: 0 }} checked={item.key === selectedCategory} />
//                       </Col>
//                       <Col span={22}>{item.label}</Col>
//                     </Row>
//                   ))}
//                 </div>
//               }
//               trigger={['click']}
//             >
//               <a onClick={(e) => e.preventDefault()}>
//                 <Space className="text-white mt-1  ml-9">Kategori <DownOutlined /></Space>
//               </a>
//             </Dropdown>
//           </div>
//         </Sider>

//         {/* Daftar Produk */}
//         <div className="w-3/4 p-4">
//           <div className="mt-4 flex flex-wrap justify-center">
//             {products.map((product) => (
//               <div key={product.id} className="mr-4 mb-4" style={{ width: '300px' }}>
//                 <ProductCard product={product} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Kategory;

import React, { useState } from 'react';
import { Layout, Space, Dropdown, Checkbox, Row, Col } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'tailwindcss/tailwind.css';


const { Sider } = Layout;

const siderStyle = {
  lineHeight: '25px',
  color: '#fff',
  backgroundColor: 'rgb(30 41 59)',
  height: '37rem',
};

const dropdownContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end',
};

const items = [
  {
    label: <a className='text-white ml-6' href="#">Kategori 1</a>,
    key: '0',
  },
  {
    label: <a className='text-white ml-6' href="#">Kategori 3</a>,
    key: '1',
  },
  {
    label: <a className='text-white ml-6' href="#">Kategori 3</a>,
    key: '2',
  },
  {
    label: <a className='text-white ml-6' href="#">Kategori 4</a>,
    key: '3',
  },
  {
    label: <a className='text-white ml-6' href="#">Kategori 5</a>,
    key: '4',
  },
];

const Sbar = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (itemKey) => {
    setSelectedCategory(itemKey === selectedCategory ? null : itemKey);
  };

  return (
    <>
      <Space align="center" justify="center">
        <Layout>
          <Sider style={siderStyle}>
            <div className="text-white  items-center">
              <div className="mt-4 ml-3 text-2xl">Filter</div>
              <Dropdown
  overlay={
    <div>
      {items.map((item) => (
        <Row key={item.key} style={{ margin: 0 }} onClick={() => handleCategoryClick(item.key)}>
          <Col span={1}>
            <Checkbox style={{ margin: 0 }} checked={item.key === selectedCategory} />
          </Col>
          <Col span={22}>{item.label}</Col>
        </Row>
      ))}
    </div>
  }
  trigger={['click']}
>
  <a onClick={(e) => e.preventDefault()}>
    <Space className="text-white mt-1  ml-9">Kategori <DownOutlined /></Space>
  </a>
</Dropdown>
            </div>
          </Sider>
        </Layout>
      </Space>
    </>
  );
};

export default Sbar;

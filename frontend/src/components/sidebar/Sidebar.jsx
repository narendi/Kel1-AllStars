import React from 'react';
import { Layout, Space, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const { Sider } = Layout;

const siderStyle = {
  lineHeight: '25px',
  color: '#fff',
  backgroundColor: 'rgb(30 41 59)',
  height: '38rem',
};

const items = [
  {
    label: <a href="">Kategori 1</a>,
    key: '0',
  },
  {
    label: <a href="">Kategori 3</a>,
    key: '1',
  },
  {
    label: <a href="">Kategori 3</a>,
    key: '2',
  },
  {
    label: <a href="">Kategori 4</a>,
    key: '3',
  },
  {
    label: <a href="">Kategori 5</a>,
    key: '4',
  },
];

const Sbar = () => {
  return (
    <>
      <Space align="center" justify="center">
        <Layout>
          <Sider style={siderStyle}>
            <div className="text-white  items-center">
              <div className="mt-4 ml-3 text-2xl">Filter</div>
              <Dropdown menu={{ items }} trigger={['click']}>
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

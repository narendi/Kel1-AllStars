import React from 'react';
import { Layout, Image } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const headerStyle = 'b text-white h-16 p-4 bg-blue-700 text-xl';
const contentStyle = 'text-center min-h-32 h-32 leading-32 text-white bg-blue-600';
const siderStyle = 'text-center h-32 leading-32 text-white bg-blue-500';
const footerStyle = 'text-center text-white bg-blue-400 h-16';

const IsiPelatihan = () => {
  return (
    <>
      <Layout>
        <Header className= {headerStyle}>Header</Header>
        <div className="mx-auto" >
          <Image style={{ width: '300px' , height: 'auto' }} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" alt='Imagee' />
        </div>
        <Layout hasSider>
          <Sider className={siderStyle}>Sider</Sider>
          <Content className={contentStyle}>Content</Content>
        </Layout>
        <Footer className={footerStyle}>Footer</Footer>
      </Layout>
    </>
  );
};

export default IsiPelatihan;

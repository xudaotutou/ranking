import { Layout } from 'antd';
import React from 'react';
import Header from './header';

const { Content, Footer } = Layout;

export default function DefaultLayout({ children }: { children: React.ReactNode; }){  
  return <Layout style={{
    minHeight: '100vh'
  }}>
    <Header />
    <Content style={{ position: 'relative' }}>
      {children}
    </Content>
    <Footer style={{ textAlign: 'center', backgroundColor: 'white' }}>Rustlings Ranking ©2022 Created by <a href='https://github.com/yfblock'>yfblock</a></Footer>
  </Layout>;
}
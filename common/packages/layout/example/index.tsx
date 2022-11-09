import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Layout, { MainContent } from '../src';

const App = () => {
  const headerProps = {
    // subTitle: '课程培训2',
    extra: {
      customRender: <a onClick={() => console.log('click')}>社区首页3</a>,
      dropMenu: [
        {
          key: 'first',
          title: '个人中心',
          onClick: () => console.log('first'),
        },
        {
          key: 'second',
          title: '退出登录',
          onClick: () => console.log('second'),
        },
        {
          key: 'third',
          title: '课程礼包',
          onClick: () => console.log('third'),
        },
      ],
      userInfo: {
        phone: '17703401850',
      },
    },
  };
  return (
    <Layout headerProps={headerProps} withLoad>
      <MainContent>主内容</MainContent>
    </Layout>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

## 说明

本包是为 [os2edu 开源操作系统社区](https://os2edu.cn/homepage/) 子项目提供统一的 React 布局组件。

## 使用

```jsx
import Layout, { MainContent } from '@os2edu/layout';

const headerProps = {
  subTitle: '课程培训',
  extra: {
    customRender: <span>自定义区域</span>,  // 头部右侧自定义显示内容
    dropMenu: [ // 点用户头像下拉菜单
      { key: 'profile': title: '用户信息', onClick: () => {} },
      { key: 'logout': title: '退出', onClick: () => {} }
    ],
    userInfo: { // 显示的用户信息
      phone: '17703401850',
      avatar: '',
    },
  },
};

return (
  <Layout headerProps={headerProps}>
    <MainContent>主内容</MainContent>
  </Layout>
);
```

### 描述

![shortcut](https://user-images.githubusercontent.com/920487/198816649-e76a4385-ada6-439b-9bd2-83034abd14a4.png)


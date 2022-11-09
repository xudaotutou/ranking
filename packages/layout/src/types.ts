export interface IMenuItem {
  key: string;
  title: string;
  onClick: () => void;
}

export interface IExtraProps {
  userInfo: {
    phone?: string;
    avatar?: string;
  }
  dropMenu: IMenuItem[];
  customRender: React.ReactNode;
}

export interface IHeaderProps extends React.HTMLAttributes<HTMLHeadElement> {
  homeURL?: string;
  logo?: string;
  title?: string;
  subTitle?: string
  extra?: Partial<IExtraProps>;
}

export interface IMainContentProps extends React.HTMLAttributes<HTMLDivElement> {
}

export interface ILayoutProps extends React.HTMLAttributes<HTMLElement> {
  headerProps: IHeaderProps;
  withLoad?: boolean
}

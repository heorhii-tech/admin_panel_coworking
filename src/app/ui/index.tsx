import { Flex, Layout } from "antd";
import { Outlet } from "react-router-dom";
const { Header, Footer, Sider, Content } = Layout;
import { SideBarMenu } from "@src/widgets/side-bar";
import { UserProvider } from "@src/features/user/contexts/UserContext";
import { Header as HeaderBlock } from "@src/widgets/header/ui";

export const MainLayout = () => {
  const headerStyle: React.CSSProperties = {
    color: "#fff",
    height: 64,

    backgroundColor: "#4096ff",
  };

  const contentStyle: React.CSSProperties = {
    textAlign: "center",
  };

  const siderStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#1677ff",
  };

  const footerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#4096ff",
  };

  const layoutStyle = {
    overflow: "hidden",
    width: "calc(100%)",
    maxWidth: "calc(100%)",
    minHeight: "100vh",
  };
  return (
    <UserProvider>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          <HeaderBlock />
        </Header>
        <Layout>
          <Sider width={"15%"} style={siderStyle}>
            <SideBarMenu />
          </Sider>
          <Content style={contentStyle}>
            <Outlet />
          </Content>
        </Layout>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </UserProvider>
  );
};

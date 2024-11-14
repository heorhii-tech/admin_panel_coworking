import { Flex, Layout } from "antd";
import { Outlet } from "react-router-dom";
const { Header, Footer, Sider, Content } = Layout;
import { SideBarMenu } from "@src/widgets/side-bar";
import { UserProvider } from "@src/features/user/contexts/UserContext";

export const MainLayout = () => {
  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 48,
    lineHeight: "64px",
    backgroundColor: "#4096ff",
  };

  const contentStyle: React.CSSProperties = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#0958d9",
  };

  const siderStyle: React.CSSProperties = {
    textAlign: "center",
    lineHeight: "120px",
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
    height: "100vh",
  };
  return (
    <UserProvider>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>Header</Header>
        <Layout>
          <Sider width="25%" style={siderStyle}>
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

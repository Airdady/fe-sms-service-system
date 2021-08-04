import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

export default function DocumentationPage() {
  return (
    <Layout style={{ height: "100vh" }}>
      <Content style={{ padding: "0 0" }}>
        <Layout
          className="site-layout-background"
          style={{ padding: "0 0", height: "100%", width: "100%" }}
        >
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%" }}
            >
              <SubMenu
                key="JavaScript"
                icon={<UserOutlined />}
                title="JavaScript"
              >
                <Menu.Item key="1">Installation</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="Python" icon={<LaptopOutlined />} title="Python">
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="Java" icon={<NotificationOutlined />} title="Java">
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content
            style={{ padding: "0 24px", height: "100%", overflow: "scroll" }}
          ></Content>
        </Layout>
      </Content>
    </Layout>
  );
}

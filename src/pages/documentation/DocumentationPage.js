import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import { LaptopOutlined, NotificationOutlined } from "@ant-design/icons";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Document from "./components/Document";
import SendOTP from "./components/SendOTP";
import { sms, verify } from "./data";

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

export default function DocumentationPage() {
  const { path, url } = useRouteMatch();
  const getPath = (url) => {
    if (url === "") return path;
    return `${path}/${url}`;
  };
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
              <SubMenu key="Verification" title="Verification">
                {verify.map((v) => (
                  <Menu.Item key={v.url}>
                    <Link to={getPath(v.path)}>{v.label}</Link>
                  </Menu.Item>
                ))}
              </SubMenu>
              <SubMenu key="SMS" title="Sending SMS">
                {sms.map((v) => (
                  <Menu.Item key={v.url}>
                    <Link to={getPath(v.path)}>{v.label}</Link>
                  </Menu.Item>
                ))}
              </SubMenu>
            </Menu>
          </Sider>
          <Content
            style={{ padding: "30px 30px", height: "100%", overflow: "scroll" }}
          >
            <Switch>
              {verify.map((v) => (
                <Route path={getPath(v.path)} key={v.path} exact>
                  <Document {...v} />
                </Route>
              ))}
              {sms.map((v) => (
                <Route path={getPath(v.path)} key={v.path} exact>
                  <Document {...v} />
                </Route>
              ))}
            </Switch>
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
}

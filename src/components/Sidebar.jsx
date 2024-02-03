import React from "react";
import "./styles/sidebar.style.less";
import { Layout, Menu } from "antd";
import {
  BarChartOutlined,
  CodeSandboxOutlined,
  HomeOutlined,
  LogoutOutlined,
  ProfileOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";

const { Sider } = Layout;

const Sidebar = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  const items = [
    getItem("Dashboard", "dashboard", <HomeOutlined />),
    getItem("Inventory", "inventory", <ShoppingCartOutlined />),
    getItem("Reports", "reports", <BarChartOutlined />),
    getItem("Suppliers", "suppliers", <UserOutlined />),
    getItem("Orders", "orders", <CodeSandboxOutlined />),
    getItem("Manage Store", "store", <ProfileOutlined />),
  ];

  const bottomItems = [
    getItem("Settings", "settings", <SettingOutlined />),
    getItem("Logout", "logout", <LogoutOutlined />),
  ];

  const handleNavigate = (key) => {
    navigate(`/${key}`);
  };

  return (
    <div className="sidebar-wrapper">
      <h1>TapShelf</h1>
      <Sider>
        <Menu
          className="top-menu"
          theme="light"
          selectedKeys={[location?.pathname?.replace("/", "")]}
          mode="inline"
          items={items}
          onClick={({ item, key, keyPath, domEvent }) => handleNavigate(key)}
        />
        <Menu
          className="bottom-menu"
          theme="light"
          selectedKeys={[location?.pathname?.replace("/", "")]}
          mode="inline"
          items={bottomItems}
          onClick={({ item, key, keyPath, domEvent }) => handleNavigate(key)}
        />
      </Sider>
    </div>
  );
};

export default Sidebar;

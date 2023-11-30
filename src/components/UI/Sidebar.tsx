import { useState } from "react";
import { Layout, Menu } from "antd";
import { getUserInfo } from "../../helpers/authHelper";
import type { MenuProps } from "antd";
import { TableOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
const { Sider } = Layout;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const { role } = getUserInfo() as any;

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "2rem",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: ".5rem",
          padding: "10px 0px",
        }}
      >
        Dashboard
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems(role) as any}
      />
    </Sider>
  );
};

export default SideBar;

const sidebarItems = (role: string) => {
  const clientAdminSidebarItems: MenuProps["items"] = [
    {
      label: "Manage",
      icon: <TableOutlined />,
      key: `/${role}/manage-client`,
      children: [
        {
          label: <NavLink to={`/${role}/all-users`}>All clients</NavLink>,
          key: `/${role}/all-users`,
        },
        {
          label: <NavLink to={`/${role}/get-all-order`}>All Order</NavLink>,
          key: `/${role}/get-all-order`,
        },
        {
          label: <NavLink to={`/${role}/get-all-service`}>All Items</NavLink>,
          key: `/${role}/get-all-service`,
        },
        {
          label: <NavLink to={`/${role}/create-service`}>Create Items</NavLink>,
          key: `/${role}/create-service`,
        },
      ],
    },
  ];

  const clientSidebarItems: MenuProps["items"] = [
    {
      label: <NavLink to={`/${role}/orders`}>My-Orders</NavLink>,
      icon: <TableOutlined />,
      key: `/${role}/orders`,
    },
  ];

  if (role === "admin") return clientAdminSidebarItems;
  else {
    return clientSidebarItems;
  }
};

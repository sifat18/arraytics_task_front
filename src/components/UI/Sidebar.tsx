/* eslint-disable @typescript-eslint/no-explicit-any */
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
      key: `/profile/manage-client`,
      children: [
        {
          label: <NavLink to={`/profile/all_users`}>All clients</NavLink>,
          key: `/profile/all_users`,
        },
        {
          label: <NavLink to={`/profile/all_orders`}>All Order</NavLink>,
          key: `/profile/all_orders`,
        },
        {
          label: <NavLink to={`/profile/all_items`}>All Items</NavLink>,
          key: `/profile/all_items`,
        },
        {
          label: <NavLink to={`/profile/create_item`}>Create Items</NavLink>,
          key: `/profile/create_item`,
        },
        {
          label: <NavLink to={`/profile/create_admin`}>Create Admin</NavLink>,
          key: `/profile/create_admin`,
        },
      ],
    },
  ];

  const clientSidebarItems: MenuProps["items"] = [
    {
      label: <NavLink to={`/profile/all_orders`}>My-Orders</NavLink>,
      icon: <TableOutlined />,
      key: `/profile/all_orders`,
    },
  ];

  if (role === "admin") return clientAdminSidebarItems;
  else {
    return clientSidebarItems;
  }
};

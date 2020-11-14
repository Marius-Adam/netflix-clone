import React, { useState } from "react";
import "../styles/components/sidenav.scss";
import { Layout } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  HomeOutlined,
  SearchOutlined,
  CalendarOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { ReactComponent as Logo } from "../assets/images/netflix-logo.svg";
import { ReactComponent as LogoXl } from "../assets/images/netflix-logo-large.svg";
import { ReactComponent as Television } from "../assets/icons/television.svg";
import { ReactComponent as ClapperBoard } from "../assets/icons/clapperboard.svg";

const { Sider } = Layout;

export default function Sidenav() {
  const [collapsed, setCollapsed] = useState(true);

  const menu = {
    menuItems: [
      { icon: <SearchOutlined />, label: "Search" },
      { icon: <HomeOutlined />, label: "Home" },
      { icon: <Television />, label: "Series" },
      { icon: <ClapperBoard />, label: "Movies" },
      { icon: <PlusOutlined />, label: "My List" },
      { icon: <CalendarOutlined />, label: "New" },
    ],
  };

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider
      breakpoint="lg"
      onBreakpoint={() => {
        setCollapsed(!collapsed);
      }}
      collapsible
      collapsed={collapsed}
      trigger={null}
      className="h-screen py-4 bg-black duration-300"
    >
      <div className="flex justify-center items-center relative">
        <div className="logo flex justify-center">
          {collapsed ? (
            <Logo width="20px" />
          ) : (
            <LogoXl width="100%" height="36px" />
          )}
        </div>
        {React.createElement(collapsed ? RightOutlined : LeftOutlined, {
          className: `text-xl text-red absolute top-1`,
          style: { right: "-1.5rem" },
          onClick: toggle,
        })}
      </div>
      <div className="flex justify-center">
        <div className={`flex flex-col justify-between h-84 mt-16`}>
          {menu.menuItems.map((item, index) => (
            <div className="menu-items" key={index}>
              {item.icon}
              {!collapsed && <span>{item.label}</span>}
            </div>
          ))}
        </div>
      </div>
    </Sider>
  );
}

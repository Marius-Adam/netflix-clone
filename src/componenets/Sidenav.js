import React, { useState, useEffect } from "react";
import "../styles/components/sidenav.scss";
import { Link, useLocation } from "react-router-dom";
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
  const [hidden, setHidden] = useState(false);
  const location = useLocation();

  const menu = {
    menuItems: [
      {
        icon: <SearchOutlined className={!collapsed ? "mr-4" : "mr-0"} />,
        label: "Search",
        link: "/search",
      },
      {
        icon: <HomeOutlined className={!collapsed ? "mr-4" : "mr-0"} />,
        label: "Home",
        link: "/home",
      },
      {
        icon: <Television className={!collapsed ? "mr-4" : "mr-0"} />,
        label: "Series",
        link: "/series",
      },
      {
        icon: <ClapperBoard className={!collapsed ? "mr-4" : "mr-0"} />,
        label: "Movies",
        link: "/movies",
      },
      {
        icon: <PlusOutlined className={!collapsed ? "mr-4" : "mr-0"} />,
        label: "My List",
        link: "/list",
      },
      {
        icon: <CalendarOutlined className={!collapsed ? "mr-4" : "mr-0"} />,
        label: "New",
        link: "/new",
      },
    ],
  };

  useEffect(() => {
    if (location.pathname === "/login") {
      setHidden(true);
    } else {
      setHidden(false);
    }
  }, [location]);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      trigger={null}
      className={`h-screen py-4 bg-black duration-300 fixed z-10 ${
        !collapsed && "opaque"
      } ${hidden && "hidden"}`}
    >
      <div className="flex justify-center items-center relative">
        <div className="logo flex justify-center">
          {collapsed ? (
            <Logo width="20px" height="36px" />
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
            <Link to={item.link} key={index}>
              <div className="menu-items flex items-center">
                {item.icon}
                {!collapsed && <span>{item.label}</span>}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Sider>
  );
}

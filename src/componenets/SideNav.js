import React, { useState } from "react";
import { Layout } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { ReactComponent as Logo } from "../assets/images/netflix-logo.svg";
import { ReactComponent as LogoXl } from "../assets/images/netflix-logo-large.svg";

const { Sider } = Layout;

export default function SideNav() {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider
      breakpoint="lg"
      onBreakpoint={(broken) => {
        setCollapsed(!collapsed);
      }}
      collapsedWidth="80"
      collapsible
      collapsed={collapsed}
      trigger={null}
      className="h-screen py-4 bg-black"
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
          className: `trigger text-xl text-red absolute top-1`,
          style: { right: "-1.5rem" },
          onClick: toggle,
        })}
      </div>
    </Sider>
  );
}

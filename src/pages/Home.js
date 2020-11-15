import React from "react";
import Sidenav from "../componenets/Sidenav";
import { Layout } from "antd";

const { Content } = Layout;

export default function Home() {
  return (
    <Layout>
      <Sidenav />
      <Layout>
        <Content>Home</Content>
      </Layout>
    </Layout>
  );
}

import React from "react";
import Sidenav from "../componenets/Sidenav";
import { Layout } from "antd";

const { Content } = Layout;

export default function Series() {
  return (
    <Layout>
      <Sidenav />
      <Layout>
        <Content>Series</Content>
      </Layout>
    </Layout>
  );
}

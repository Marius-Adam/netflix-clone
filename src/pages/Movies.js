import React from "react";
import Sidenav from "../componenets/Sidenav";
import { Layout } from "antd";

const { Content } = Layout;

export default function Movies() {
  return (
    <Layout>
      <Sidenav />
      <Layout>
        <Content>Movies</Content>
      </Layout>
    </Layout>
  );
}

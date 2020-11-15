import React from "react";
import Sidenav from "../componenets/Sidenav";
import { Layout } from "antd";

const { Content } = Layout;

export default function Search() {
  return (
    <Layout>
      <Sidenav />
      <Layout>
        <Content>Search</Content>
      </Layout>
    </Layout>
  );
}

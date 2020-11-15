import React from "react";
import Sidenav from "../componenets/Sidenav";
import { Layout } from "antd";

const { Content } = Layout;

export default function List() {
  return (
    <Layout>
      <Sidenav />
      <Layout>
        <Content>List</Content>
      </Layout>
    </Layout>
  );
}

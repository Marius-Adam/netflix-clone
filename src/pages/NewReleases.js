import React from "react";
import Sidenav from "../componenets/Sidenav";
import { Layout } from "antd";

const { Content } = Layout;

export default function NewReleases() {
  return (
    <Layout>
      <Sidenav />
      <Layout>
        <Content>New Releases</Content>
      </Layout>
    </Layout>
  );
}

import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

export default function Home() {
  return (
    <Layout className="flex-row">
      <Content className="h-screen">Home</Content>
    </Layout>
  );
}

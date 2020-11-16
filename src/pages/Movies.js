import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

export default function Movies() {
  return (
    <Layout>
      <Content className="h-screen text-center text-4xl">Movies</Content>
    </Layout>
  );
}

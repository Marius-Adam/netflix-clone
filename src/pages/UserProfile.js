import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

export default function UserProfile() {
  return (
    <Layout>
      <Content className="h-screen text-center text-4xl">User Profile</Content>
    </Layout>
  );
}

import React from "react";
import LoginBg from "../assets/images/login-bg.png";
import "../styles/pages/login.scss";

import { Card, Input, Form, Button, Checkbox } from "antd";

import { ReactComponent as Logo } from "../assets/images/netflix-logo-large.svg";
import { ReactComponent as Facebook } from "../assets/icons/facebook.svg";
import { ReactComponent as Google } from "../assets/icons/google.svg";

export default function Login() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login">
      <Logo className="absolute sm-max:m-4 m-8" width="160px" height="42px" />
      <img
        src={LoginBg}
        alt="netflix movies login cover"
        className="w-screen h-screen object-cover"
      />
      <Card className="bg-black bg-opacity-75 border-0 rounded w-96 sm:pt-0 sm:px-8 sm:pb-4 sm-max:w-84 xs-max:w-64">
        <h1 className="text-4xl text-white text-shadow-md">Sign In</h1>
        <Form
          className="flex flex-col justify-center"
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            className="mb-6 mt-6"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input placeholder="Email or phone number" />
          </Form.Item>
          <Form.Item
            className="mb-0"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item name="remember" className="mb-4" valuePropName="checked">
            <Checkbox className="ml-1 mt-2" style={{ color: "gray" }}>
              Remember me
            </Checkbox>
          </Form.Item>
          <Form.Item className="mb-8">
            <Button type="primary" style={{ background: "#db0000" }}>
              Sign in
            </Button>
          </Form.Item>
          <Form.Item className="pb-2 mb-0 mx-auto">
            <Button
              type="primary"
              className="flex items-center p-0 text-xs"
              style={{
                background: "#3b5998",
                padding: "0 12px",
                width: "11rem",
              }}
            >
              <Facebook className="mr-1 h-5" style={{ fill: "white" }} />
              Login with Facebook
            </Button>
          </Form.Item>
          <Form.Item className="pb-2 mb-0 mx-auto">
            <Button
              type="primary"
              className="flex items-center p-0 text-xs"
              style={{
                background: "#DB4437",
                padding: "0 14px",
                width: "11rem",
              }}
            >
              <Google className="mr-1 h-5" />
              Login with Google
            </Button>
          </Form.Item>
          <Form.Item className="text-center mt-4" style={{ color: "gray" }}>
            New to Netflix?{" "}
            <a href="/" className="hover:text-red ">
              Sign up now!
            </a>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

import React from "react";
import LoginBg from "../assets/images/login-bg.png";
import "../styles/pages/login.scss";
import { useHistory } from "react-router-dom";

import { Card, Input, Form, Button, Checkbox } from "antd";

import { ReactComponent as LogoXl } from "../assets/images/netflix-logo-large.svg";
import { ReactComponent as Logo } from "../assets/images/netflix-logo.svg";
import { ReactComponent as Facebook } from "../assets/icons/facebook.svg";
import { ReactComponent as Google } from "../assets/icons/google.svg";

export default function Login() {
  const history = useHistory();

  const onFinish = (values) => {
    history.replace("/home");
  };

  const onFinishFailed = (errorInfo) => {};

  return (
    <div className="login">
      <LogoXl className="absolute m-8 sm-max:m-4" width="160px" height="42px" />
      <img
        src={LoginBg}
        alt="netflix movies login cover"
        className="h-screen w-screen object-cover"
      />
      <Card className="bg-black bg-opacity-75 border-0 rounded w-96 sm:pt-0 sm:px-8 sm:pb-4 sm-max:w-84 xs-max:w-70 xs-max:mt-4">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl text-white font-medium text-shadow-md tracking-tighter">
            Sign in
          </h1>
          <Logo className="card-logo hidden" width="20px" height="30px" />
        </div>

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
            className="my-6 xs-max:my-2"
            name="username"
            rules={[
              {
                required: true,
                // type: "email",
                message: "Please enter a valid email address!",
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
            <Checkbox className="ml-1 mt-2 text-lightgray">
              Remember me
            </Checkbox>
          </Form.Item>
          <Form.Item className="mb-8">
            <Button
              type="primary"
              className="bg-red w-full h-12"
              htmlType="submit"
            >
              Sign in
            </Button>
          </Form.Item>
          <Form.Item className="facebook pb-2 mb-0 mx-auto">
            <Button
              type="primary"
              className="flex items-center p-0 text-xs"
              style={{
                background: "#3b5998",
                padding: "0 12px",
                width: "11rem",
              }}
            >
              <Facebook className="mr-1 h-5 fill-current text-white" />
              Login with Facebook
            </Button>
          </Form.Item>
          <Form.Item className="google pb-2 mb-0 mx-auto">
            <Button
              type="primary"
              className=" flex items-center p-0 text-xs"
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
          <Form.Item className="sign-up text-center my-4 text-lightgray tracking-tight xs-max:mt-2">
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

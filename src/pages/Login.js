import React, { useEffect, useContext } from "react";
import "../styles/pages/login.scss";
import { useHistory, useLocation } from "react-router-dom";
import { AuthContext } from "../shared/AuthContext";
import { Card, Input, Form, Button, Checkbox, notification } from "antd";

import LoginBg from "../assets/images/login-bg.png";
import { ReactComponent as LogoXl } from "../assets/images/netflix-logo-large.svg";
import { ReactComponent as Logo } from "../assets/images/netflix-logo.svg";
import { ReactComponent as TMDBLogo } from "../assets/images/tmdb-logo.svg";
import { ReactComponent as Facebook } from "../assets/icons/facebook.svg";
import { ReactComponent as Google } from "../assets/icons/google.svg";

export default function Login() {
  const {
    accessToken,
    setAccessToken,
    isAuthenticated,
    setIsAuthenticated,
    getAccessToken,
    redirectSignIn,
    validateToken,
    createSessionId,
  } = useContext(AuthContext);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    async function fetchData() {
      const token = await getAccessToken();
      setAccessToken(token?.request_token);
      if (location?.search.includes("true")) {
        setIsAuthenticated(true);
      }
    }

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const openNotification = () => {
    notification.open({
      message: "Invalid TMDB username or password",
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };

  const onFinish = (values) => {
    validateToken(values.username, values.password, accessToken)
      .then(() => {
        history.push("/home");
        createSessionId(accessToken);
      })
      .catch((error) => {
        if (error.response.status >= 400) {
          openNotification();
        }
      });
  };
  const onFinishFailed = (errorInfo) => {};

  const handleAutheticateUI = () => {
    if (isAuthenticated) {
      return (
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
                  message: "Please enter a valid TMDB username!",
                },
              ]}
            >
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item
              className="mb-0"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please enter your password!",
                },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item name="remember" className="mb-4" valuePropName="checked">
              <Checkbox className="ml-1 text-lightgray">Remember me</Checkbox>
            </Form.Item>
            <Form.Item className="mb-8">
              <Button
                type="primary"
                className="bg-red w-full h-12"
                htmlType="submit"
              >
                Sign In
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
              New to Netflix TMDB?{" "}
              <a
                href="https://www.themoviedb.org/signup"
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-red "
              >
                Sign up now!
              </a>
            </Form.Item>
          </Form>
        </Card>
      );
    } else {
      return (
        <Card className="bg-black bg-opacity-75 border-0 rounded w-96 sm:pt-0 sm:px-8 sm:pb-4 sm-max:w-84 xs-max:w-70 xs-max:mt-4">
          <div className="flex items-center justify-between">
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
            <TMDBLogo className="tmdb-logo my-6 " />
            <Form.Item className="mb-0">
              <Button
                type="primary"
                className="bg-red w-full h-12"
                onClick={() => {
                  redirectSignIn(accessToken);
                }}
              >
                Authenticate
              </Button>
            </Form.Item>
            <Form.Item className="sign-up text-center mb-0 text-lightgray tracking-tight">
              New to Netflix TMDB?{" "}
              <a
                href="https://www.themoviedb.org/signup"
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-red "
              >
                Sign up now!
              </a>
            </Form.Item>
          </Form>
        </Card>
      );
    }
  };

  return (
    <div className="login">
      <LogoXl
        className="login-logo absolute m-8 sm-max:m-4 "
        width="160px"
        height="42px"
      />
      <img
        src={LoginBg}
        alt="netflix movies login cover"
        className="h-screen w-screen object-cover"
      />
      {handleAutheticateUI()}
    </div>
  );
}

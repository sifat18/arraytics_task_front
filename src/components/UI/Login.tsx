/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Row, message } from "antd";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "../../redux/api/authApi";
import { storeUserInfo } from "../../helpers/authHelper";
import login from "/login.png";
import { useNavigate } from "react-router-dom";
import Form from "../Forms/Form";
import FormInput from "../Forms/FormInput";
import { loginSchema } from "./loginSchema";
import { yupResolver } from "@hookform/resolvers/yup";

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const [userLogin] = useUserLoginMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await userLogin({ ...data }).unwrap();
      console.log({ res });
      if (res?.data?.accessToken) {
        navigate("/");
        message.success("User logged in successfully!");
      }
      storeUserInfo({ accessToken: res?.data?.accessToken });
    } catch (err: any) {
      message.error(err.message);
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <img src={login} width={500} alt="login image" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0px",
            fontFamily: "Grandstander, cursive",
            fontSize: "1.2rem",
            color: "black",
          }}
        >
          First login to your account
        </h1>
        <div>
          <Form submitHandler={onSubmit} resolver={yupResolver(loginSchema)}>
            <div>
              <FormInput
                name="email"
                type="email"
                size="large"
                label="User Email"
                required
                labelStyle={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1rem",
                  color: "#35353F",
                }}
              />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                label="User Password"
                required
                labelStyle={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1rem",
                  color: "#35353F",
                }}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: "100%",
                  height: "2.5rem",
                  fontSize: "1.2rem",
                  fontFamily: "Inter,sans-serif",
                }}
              >
                Login
              </Button>
            </div>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Login;

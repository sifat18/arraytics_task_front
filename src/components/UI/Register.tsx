/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Card, Col, Row, message } from "antd";
import { SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { MailOutlined, UserAddOutlined, LockOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import { useNavigate } from "react-router-dom";
import register from "/register.png";
import { useCreateUserMutation } from "../../redux/api/userApi";
import Form from "../Forms/Form";
import { registerSchema } from "./loginSchema";
import FormInput from "../Forms/FormInput";

type FormValues = {
  email: string;
  password: string;
};

const Register = () => {
  const [userCreate] = useCreateUserMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    data.role = "client";
    data.created_by = data.Name || data.email;
    console.log({ data });
    try {
      const res = await userCreate(data);
      if (res?.error) {
        message.error(res?.error?.data);
      } else {
        navigate("/login");
        message.success("User registered  successfully!");
        setTimeout(() => {
          message.info("Please now Login to your account!");
        }, 2000);
      }
    } catch (err: any) {
      console.log(err.data);
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
        <img src={register} width={500} alt="Register image" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0px",
            fontFamily: "Inter, sans-serif",
            fontSize: "1.2rem",
            textAlign: "center",
            color: "black",
          }}
        >
          First Register your account
        </h1>
        <Row justify="center" align="middle">
          <Col>
            <Card
              className="registerBox"
              title={
                <Title
                  style={{
                    fontFamily: "Grandstander, cursive",
                    fontSize: "1rem",
                    // color: "#21B7E2",
                  }}
                  level={2}
                >
                  Create your account
                </Title>
              }
            >
              <Form
                submitHandler={onSubmit}
                resolver={yupResolver(registerSchema)}
              >
                <UserAddOutlined />{" "}
                <FormInput
                  name="Name"
                  type="text"
                  size="large"
                  label="Name"
                  required
                  style={{ marginTop: "0.5em", marginBottom: "1em" }}
                  labelStyle={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.9rem",
                    color: "#35353F",
                  }}
                />
                <MailOutlined />
                <FormInput
                  name="email"
                  type="email"
                  size="large"
                  label="Email"
                  placeholder="Email"
                  style={{ marginBottom: "1em" }}
                  labelStyle={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.9rem",
                    color: "#35353F",
                  }}
                />
                <LockOutlined />
                <FormInput
                  name="password"
                  type="password"
                  size="large"
                  label="Password"
                  placeholder="Password"
                  style={{ marginBottom: "1em" }}
                  labelStyle={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.9rem",
                    color: "#35353F",
                  }}
                />
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{
                      width: "100%",
                      height: "2.5rem",
                      fontFamily: "Inter,sans-serif",
                      fontSize: "1rem",
                    }}
                  >
                    Register
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Register;

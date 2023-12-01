import { Button, Col, Row, message } from "antd";
import Form from "../Forms/Form";
import FormInput from "../Forms/FormInput";
import { getUserInfo } from "../../helpers/authHelper";
import { registerSchema } from "./loginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { MailOutlined, UserAddOutlined, LockOutlined } from "@ant-design/icons";
import { useCreateUserMutation } from "../../redux/api/userApi";

const CreateAdmin = () => {
  const [userCreate] = useCreateUserMutation();
  const { email } = getUserInfo() as any;

  const onSubmit = async (data: any) => {
    data.created_by = email;
    data.role = "admin";
    try {
      const res = await userCreate(data).unwrap();
      if (res?.data) {
        message.success("Admin created");
      } else {
        message.error(res?.error?.data);
      }
    } catch (err: any) {
      message.error(err.message || "Something went wrong");
    }
  };
  return (
    <>
      <h1
        style={{
          margin: "0.5em 0.2em",
          fontFamily: "Rasa, serif",
          fontSize: "1.5rem",
          color: "#35353F",
        }}
      >
        Create Admin
      </h1>
      <Form submitHandler={onSubmit} resolver={yupResolver(registerSchema)}>
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <p
            style={{
              margin: "0.5em 0",
              fontFamily: "Rasa, serif",
              fontSize: "1.5rem",
              color: "#35353F",
            }}
          >
            Admin information
          </p>
          <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
            <Col span={8} style={{ margin: "10px 0" }}>
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
            </Col>
            <Col span={8} style={{ margin: "10px 0" }}>
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
            </Col>
            <Col span={8} style={{ margin: "10px 0" }}>
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
            </Col>
          </Row>
        </div>

        <Button
          htmlType="submit"
          style={{
            margin: "1em ",
            fontFamily: "Rasa, serif",
            fontSize: "1rem",
          }}
        >
          Submit
        </Button>
      </Form>
    </>
  );
};
export default CreateAdmin;

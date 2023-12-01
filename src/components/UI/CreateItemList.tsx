import { Button, Col, Row, message } from "antd";
import Form from "../Forms/Form";
import FormInput from "../Forms/FormInput";
import { getUserInfo } from "../../helpers/authHelper";
import { useCreateItemMutation } from "../../redux/api/itemApi";
import { itemSchema } from "./loginSchema";
import { yupResolver } from "@hookform/resolvers/yup";

const CreateItemList = () => {
  const [createService] = useCreateItemMutation();
  const { email } = getUserInfo() as any;

  const onSubmit = async (data: any) => {
    data.created_by = email;
    try {
      const res = await createService(data).unwrap();
      if (res?.data) {
        message.success("Item created");
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
        Create Item
      </h1>
      <Form submitHandler={onSubmit} resolver={yupResolver(itemSchema)}>
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
            Item information
          </p>
          <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
            <Col span={8} style={{ margin: "10px 0" }}>
              <FormInput
                name="Name"
                label="Item name"
                size="large"
                labelStyle={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.8rem",
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
export default CreateItemList;

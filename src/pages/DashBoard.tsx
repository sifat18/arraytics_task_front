import { Layout, Row, Space, Spin } from "antd";
import { useEffect, useState } from "react";
import { isLoggedIn } from "../helpers/authHelper";
import { useNavigate } from "react-router-dom";
import SideBar from "../components/UI/Sidebar";
import Contents from "../components/UI/Contents";
import { Outlet } from "react-router-dom";

const DashBoard = () => {
  const userLoggedIn = isLoggedIn();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!userLoggedIn) {
      navigate("/login");
    }
    setIsLoading(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  if (!isLoading) {
    return (
      <Row
        justify="center"
        align="middle"
        style={{
          height: "100vh",
        }}
      >
        <Space>
          <Spin tip="Loading" size="large"></Spin>
        </Space>
      </Row>
    );
  }
  //   console.log({ children });
  return (
    <Layout hasSider>
      <SideBar />
      <Contents>
        <Outlet />
      </Contents>
    </Layout>
  );
};

export default DashBoard;

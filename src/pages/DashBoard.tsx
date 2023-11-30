import { Layout, Row, Space, Spin } from "antd";
import { useEffect, useState } from "react";
import { isLoggedIn } from "../helpers/authHelper";
import { useNavigate } from "react-router-dom";
import SideBar from "../components/UI/Sidebar";
import Contents from "../components/UI/Contents";

const DashBoard = ({ children }: { children: React.ReactNode }) => {
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

  return (
    <Layout hasSider>
      <SideBar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashBoard;

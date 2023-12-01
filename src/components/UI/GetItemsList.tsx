/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";

import { Button, Col, Input, Modal, Row, message } from "antd";
import { useState } from "react";
import dayjs from "dayjs";

import Title from "antd/es/typography/Title";
import { useDebounced } from "../../redux/hooks";
import ActionBar from "../Forms/ActionBar";
import AnTable from "../AnTable";
import Form from "../Forms/Form";
import FormInput from "../Forms/FormInput";
import {} from "../../redux/api/userApi";
import {
  useDeleteItemMutation,
  useItemsQuery,
  useUpdateItemMutation,
} from "../../redux/api/itemApi";

const GetItemsList = () => {
  const [updateItem] = useUpdateItemMutation();
  const [deleteItem] = useDeleteItemMutation();

  const query: Record<string, any> = {};
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [singleData, setSingleData] = useState({});

  query["searchTerm"] = searchTerm;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }
  const { data, isLoading } = useItemsQuery({ ...query });

  const item = data?.items;
  //   const meta = data?.meta;

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const columns = [
    {
      title: "Id",
      dataIndex: "Id",
    },
    {
      title: "Name",
      dataIndex: "Name",
    },

    {
      title: "Created By",
      dataIndex: "created_by",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <>
            <Button
              style={{
                margin: "0px 5px",
              }}
              onClick={() => {
                setSingleData(data);
                setIsModalOpen(true);
              }}
              type="primary"
            >
              <EditOutlined />
            </Button>
            <Button
              onClick={() => {
                Modal.confirm({
                  title: "Confirm",
                  content: "Are you sure? ...",
                  footer: (_, { CancelBtn }) => (
                    <>
                      <Button
                        onClick={() => {
                          deleteItem(data?.Id);
                          Modal.destroyAll();
                        }}
                      >
                        Yes
                      </Button>
                      <CancelBtn />
                      {/* <OkBtn /> */}
                    </>
                  ),
                });
              }}
              // type="primary"
              danger
            >
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];
  const onPaginationChange = (page: number, pageSize: number) => {
    // setPage(page);
    // setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };

  const onSubmit = async (data: any) => {
    data.Id = singleData?.Id;
    try {
      const res = await updateItem(data).unwrap();
      if (res) {
        message.success("User updated");
        setIsModalOpen(false);
      } else {
        message.error("Something went wrong");
      }
    } catch (err: any) {
      message.error(err.message || "Something went wrong");
    }
  };
  const defaultValues = {};
  return (
    <div>
      <ActionBar title="Items List">
        <Input
          type="text"
          size="large"
          placeholder="Search by name,id,email,created_by..."
          style={{
            width: "20%",
          }}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <div>
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button
              onClick={resetFilters}
              type="primary"
              style={{ margin: "0px 5px" }}
            >
              <ReloadOutlined />
            </Button>
          )}
        </div>
      </ActionBar>

      <AnTable
        loading={isLoading}
        columns={columns}
        dataSource={item}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={false}
      />

      <Modal
        title={
          <Title
            style={{
              fontFamily: "Grandstander, cursive",
              fontSize: "1rem",
              color: "#21B7E2",
            }}
            level={2}
          >
            Update Item
          </Title>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Row
          justify={"center"}
          style={{
            minHeight: "25vh",
          }}
        >
          <h1
            style={{
              margin: "0.5em 0",
              fontFamily: "Rasa, serif",
              fontSize: "1.5rem",
              color: "#35353F",
            }}
          >
            Update {(singleData as any)?.Name}data
          </h1>
          <div>
            <Form defaultValues={defaultValues} submitHandler={onSubmit}>
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
                    fontSize: "1.2rem",
                    fontWeight: "500",
                    margin: "5px 0px",
                    fontFamily: "Inter, sans-serif",
                    color: "#35353F",
                  }}
                >
                  Item information
                </p>
                <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
                  <Col span={24} style={{ margin: "10px 0" }}>
                    <FormInput
                      name="Name"
                      label="Name"
                      size="large"
                      type="text"
                      labelStyle={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.8rem",
                        color: "#35353F",
                      }}
                    />
                  </Col>
                </Row>
              </div>

              <div
                style={{
                  margin: "3em 0 0 21em",
                }}
              >
                <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ marginLeft: "1em" }}
                >
                  Update
                </Button>
              </div>
            </Form>
          </div>
          {/* </Col> */}
        </Row>
      </Modal>
    </div>
  );
};

export default GetItemsList;

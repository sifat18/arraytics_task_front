/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";

import { Button, Col, Select, Input, Modal, Row, message } from "antd";
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
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [nameFilter, setNameFilter] = useState<any>("");
  const [idFilter, setIdFilter] = useState<any>("");
  const [createByFilter, setCreateByFilter] = useState<any>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [singleData, setSingleData] = useState({});

  query["searchTerm"] = searchTerm;
  query["Name"] = nameFilter;
  query["Id"] = idFilter;
  query["created_by"] = createByFilter;
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
  const itemOptions = item?.map((itm: any) => ({
    value: itm?.Id,
    label: itm?.Id,
  }));
  const nameOptions = [...new Set(item?.map((itm: any) => itm?.Name))]
    .filter(Boolean)
    .map((name) => ({ value: name, label: name }));
  const createdByOptions = [
    ...new Set(item?.map((itm: any) => itm?.created_by)),
  ]
    .filter(Boolean)
    .map((name) => ({ value: name, label: name }));

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
    // const { order, field } = sorter;
    // setSortBy(field as string);
    // setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setIdFilter("");
    setNameFilter("");
    setCreateByFilter("");
    query["searchTerm"] = "";
    query["Id"] = "";
    query["Name"] = "";
    query["created_by"] = "";
  };

  const onSubmit = async (data: any) => {
    data.Id = singleData?.Id;
    try {
      const res = await updateItem(data).unwrap();
      if (res) {
        message.success("itm updated");
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
          {(!!nameFilter || !!idFilter || !!createByFilter || !!searchTerm) && (
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
          filters
        </p>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <p>Id</p>
            <Select
              defaultValue=""
              style={{ width: 250 }}
              onChange={(value) => setIdFilter(value)}
              options={
                itemOptions?.length > 0
                  ? [{ value: "", label: "All" }, ...itemOptions]
                  : [{ value: "", label: "All" }]
              }
            />
          </Col>
          <Col span={8} style={{ margin: "10px 0" }}>
            <p>Name</p>

            <Select
              defaultValue=""
              style={{ width: 250 }}
              onChange={(value) => {
                setNameFilter(value);
                setIdFilter("");
                setCreateByFilter("");
                setSearchTerm("");
              }}
              options={
                nameOptions?.length > 0
                  ? [{ value: "", label: "All" }, ...nameOptions]
                  : [{ value: "", label: "All" }]
              }
            />
          </Col>
          <Col span={8} style={{ margin: "10px 0" }}>
            <p>Created By</p>

            <Select
              defaultValue=""
              style={{ width: 250 }}
              onChange={(value) => {
                setCreateByFilter(value);
                setIdFilter("");
                setNameFilter("");
                setSearchTerm("");
              }}
              options={
                createdByOptions?.length > 0
                  ? [{ value: "", label: "All" }, ...createdByOptions]
                  : [{ value: "", label: "All" }]
              }
            />
          </Col>
        </Row>
      </div>
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

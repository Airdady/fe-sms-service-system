import React from "react";
import { Table } from "antd";
export default function HeaderTable() {
  const dataSource = [
    {
      key: "1",
      name: "Authorization",
      value: "Token {api_token}",
    },
  ];
  const columns = [
    {
      title: "Header Name",
      dataIndex: "name",
      key: "HeadName",
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "headerValue",
    },
  ];
  return <Table dataSource={dataSource} columns={columns} />;
}

import React from "react";
import { Table } from "antd";
export default function HeaderTable({ options }) {
  const dataSource = options.data.map((data) => ({
    key: data.keys,
    name: data.label,
    value: data.value,
  }));
  const columns = options.columns.map((column) => ({
    title: column.title,
    dataIndex: column.dataIndex,
    key: column.key,
  }));
  return <Table dataSource={dataSource} columns={columns} />;
}

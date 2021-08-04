import React from "react";
import Title from "antd/es/typography/Title";
import Text from "antd/lib/typography/Text";
import Paragraph from "antd/es/typography/Paragraph";
import HeaderTable from "../HeaderTable";

export default function Document({
  url,
  title,
  description,
  headers,
  params,
  request,
  body,
}) {
  return (
    <>
      <Title>{title}</Title>
      <Paragraph>{description}</Paragraph>
      <Text>
        URL:
        <pre>{url}</pre>
      </Text>

      <Title level={5}>Headers</Title>
      <HeaderTable options={headers} />
      <Title level={5}>Params</Title>
      <HeaderTable options={params} />
      <Title level={5}>Body:</Title>
      <Text>
        <pre>{body}</pre>
      </Text>
      <Title level={5}>Example Request</Title>
      <Text>
        <pre>{request}</pre>
      </Text>
    </>
  );
}

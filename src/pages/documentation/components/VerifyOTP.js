import React from "react";
import Title from "antd/es/typography/Title";
import Text from "antd/lib/typography/Text";
import Paragraph from "antd/es/typography/Paragraph";
import HeaderTable from "../HeaderTable";
const params = {
  data: [
    {
      keys: "Keys",
      label: "keys",
      value: "60c84055efb3d70015c2e8d6",
    },
  ],
  columns: [
    {
      title: "Key Name",
      dataIndex: "name",
      key: "HeadName",
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "headerValue",
    },
  ],
};

const headersOption = {
  data: [
    {
      keys: "Authorization",
      label: "Headers",
      value: "Token {api_token}",
    },
  ],
  columns: [
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
  ],
};

export default function VerifyOTP({ baseUrl }) {
  return (
    <>
      <Title>POST verify otp</Title>
      <Paragraph>
        Verify a user entered otp code, for successful validation 200 OK
        response with "status" data with text "success" will be returned. For a
        failure 200 Ok with "status" data as text "failed" will be returned.
      </Paragraph>

      <Text>
        URL:
        <pre>
          {baseUrl}/otp/verify/256758307272/0445?keys=60c84055efb3d70015c2e8d6
        </pre>
      </Text>

      <Title level={5}>Headers</Title>
      <HeaderTable options={headersOption} />
      <Title level={5}>Params</Title>
      <HeaderTable options={params} />

      <Text>
        Example Request
        <pre>
          curl --location --request POST '{baseUrl}
          /otp/verify/256758307272/0445?keys=60c84055efb3d70015c2e8d6' \
          --header 'Authorization: Token [api_token]'
        </pre>
      </Text>
    </>
  );
}

import React from "react";
import Title from "antd/es/typography/Title";
import Text from "antd/lib/typography/Text";
import Paragraph from "antd/es/typography/Paragraph";
import HeaderTable from "../HeaderTable";

export default function VerifyOTP() {
  // <Title>POST verify otp</Title>
  // <Text code>
  //     localhost:5000/otp/verify/256758307272/0445?keys=60c84055efb3d70015c2e8d6
  // </Text>
  // <Paragraph>
  //     Verify a user entered otp code, for successful validation 200 OK
  //     response with "status" data with text "success" will be returned.
  //     For a failure 200 Ok with "status" data as text "failed" will be
  //     returned.
  // </Paragraph>
  // <HeaderTable />
  return <h1>Verify OPT</h1>;
}

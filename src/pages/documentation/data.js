const baseUrl = "";
const verify = [
  {
    path: "",
    label: "Send OTP",
    title: "POST verify otp",
    description:
      "Verify a user entered otp code, for successful validation 200 OK\n" +
      '        response with "status" data with text "success" will be returned. For a\n' +
      '        failure 200 Ok with "status" data as text "failed" will be returned.',
    url: `${baseUrl}/otp/verify/256758307272/0445?keys=60c84055efb3d70015c2e8d6`,
    headers: {
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
    },
    params: {
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
    },
    request: `curl --location --request POST '${baseUrl}
          /otp/verify/256758307272/0445?keys=60c84055efb3d70015c2e8d6' \\
          --header 'Authorization: Token [api_token]'`,
  },
];

export { verify };

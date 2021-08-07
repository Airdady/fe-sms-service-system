const baseUrl = "";
const verify = [
  {
    path: "",
    label: "Send OTP",
    title: "POST send OTP",
    description:
      "To generate otp code and send to the user mobile. otp_id will be returned for succssful submission and this id should be saved for verificaton.",
    url: `${baseUrl}/otp/generate/256758307272?keys=60c84055efb3d70015c2e8d6`,
    headers: {
      data: [],
      columns: [],
    },
    params: {
      data: [
        {
          keys: "Keys",
          label: "keys",
          value: "60c84055efb3d70015c2e8d6",
          comment:
            "(Mandatory) keys represent the profile to be used to send of the message and the user authentication details.",
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
    request: `curl --location --request POST '${baseUrl}/otp/generate/256758307272?keys=60c84055efb3d70015c2e8d6'`,
  },
  {
    path: "verify-otp",
    label: "Verify OTP",
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
  {
    path: "resend-otp",
    label: "Resend OTP",
    title: "POST Resend OTP",
    description:
      "To resend a otp to the user , previuos otp_id is needed . minimum delay between resend requests is 60 seconds.",
    url: `${baseUrl}/otp/resend/256758307272?keys=60c84055efb3d70015c2e8d6`,
    headers: {
      data: [
        {
          keys: "Headers",
          label: "Authorization",
          value: "Basic d3N0bjY2NzY6ZFVLMEZwWmQ=",
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
    body: `
      formdata
      {
        "otp_id": "e8304abf-cbe1-4986-a560-91714d70c72d"
      }
      (Mandatory) otp_id received in previuos send otp request.
    `,
    request: `curl --location --request POST '${baseUrl}
          /otp/verify/256758307272/0445?keys=60c84055efb3d70015c2e8d6' \\
          --header 'Authorization: Token [api_token]'`,
  },
];

const sms = [
  {
    path: "send-sms",
    label: "Send Single SMS",
    title: "POST: Send Single SMS",
    description: "",
    url: `${baseUrl}/sms/send?keys=60cdc64546fd6d09d4cd47cb`,
    headers: {
      data: [],
      columns: [],
    },
    params: {
      data: [
        {
          keys: "Keys",
          label: "keys",
          value: "60cdc64546fd6d09d4cd47cb",
          comment:
            "(Mandatory) keys represent the profile to be used to send of the message and the user authentication details.",
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
    body: `{
    "from":"AirdadyB","to":"256758307272", "content":"Welcome to Airdady sms"
}`,
    request: `curl --location --request POST '${baseUrl}/sms/send?keys=60cdc64546fd6d09d4cd47cb' \
--data-raw '{
    "from":"AirdadyB",
	"to":"256758307272",
	"content":"Welcome to Airdady sms"
}
'`,
  },
  {
    path: "send-sms-multiple",
    label: "Send Multiple SMS",
    title: "POST: Send Broadcast SMS",
    description: "",
    url: `${baseUrl}/sms/send_batch?keys=60c84218efb3d70015c2e8d7`,
    headers: {
      data: [],
      columns: [],
    },
    params: {
      data: [
        {
          keys: "Keys",
          label: "keys",
          value: "60cdc64546fd6d09d4cd47cb",
          comment:
            "(Mandatory) keys represent the profile to be used to send of the message and the user authentication details.",
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
    body: `{
    "messages": [
        {
            "to": [
                256758307272
            ],
            "content": "Welcome to Airdady",
            "from": "Airdady"
        }
    ]
}`,
    request: `curl --location --request POST '${baseUrl}/sms/send_batch?keys=60c84218efb3d70015c2e8d7' \
--data-raw '{
    "messages": [
        {
            "to": [
                256758307272
            ],
            "content": "Welcome to Airdady",
            "from": "Airdady"
        }
    ]
}'`,
  },
];

export { verify, sms };

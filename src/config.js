export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_FeuyCEqdQ5aX7psEF4oF0LoD00unKBqqnK",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-serverlessapp-uploads"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://uage8gng9c.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_LlVBlvnGR",
    APP_CLIENT_ID: "6ei2t4tg3lopchquqrb7fqar98",
    IDENTITY_POOL_ID: "us-east-2:b42ea46b-733b-4a40-a934-8d44ec536abc"
  }
};
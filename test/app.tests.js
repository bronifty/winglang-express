const {
  getProjectRoot,
  readJsonFileRelativeToRoot,
} = require("@bronifty/fs-utils");
const serverless = require("serverless-http");
const 
async (payload, context) => {
  const handler = serverless(require("${appDirectory}").default);
  return handler(payload, context);
};

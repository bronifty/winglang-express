module.exports.handler = (appDirectory) => {
  return {
    _toInflight() {
      return `(async (payload, context) => {
        const handler = require("${appDirectory}").handler;
        return handler(payload, context);
      })`;
    },
  };
};

const { bgRed, bgYellow, bgGreen } = require("colors");
const config = require("config");

const logLevel = config.logLevel;

const info = (fileName, message) => {
  if (logLevel !== "info") return;
  console.log(`${fileName} ${message}`);
};

const warn = (fileName, message) => {
  if (logLevel === "error") return;
  console.error(`${fileName} ${message}`);
};

const error = (fileName, message) => {
  console.error(`${fileName} ${message}`);
};

const logger = (executedFileName) => {
  return {
    info: (message) => info(bgGreen(executedFileName), message),
    warn: (message) => warn(bgYellow(executedFileName), message),
    error: (message) => error(bgRed(executedFileName), message),
  };
};

module.exports = logger;

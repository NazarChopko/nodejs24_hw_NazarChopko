const info = (fileName, message) => {
  console.log(`${fileName} ${message}`);
};

const warn = (fileName, message) => {
  console.error(`${fileName} ${message}`);
};

const error = (fileName, message) => {
  console.error(`${fileName} ${message}`);
};

const logger = (executedFileName) => {
  return {
    info: (message) => info(executedFileName, message),
    warn: (message) => warn(executedFileName, message),
    error: (message) => error(executedFileName, message),
  };
};

module.exports = logger;

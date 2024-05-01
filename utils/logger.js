const { bgRed, bgYellow, bgGreen } = require("colors");
const config = require("config");
const fs = require("fs");
const path = require("path");

const rootDir = path.join(__dirname, "../");
const logLevel = config.logLevel;

fs.mkdirSync(path.join(rootDir, "logs"), { recursive: true });

const writeInfoLogStream = fs.createWriteStream(
  path.join(rootDir, "/logs/info.txt")
);
const writeErrorLogStream = fs.createWriteStream(
  path.join(rootDir, "/logs/error.txt")
);

const info = (fileName, message) => {
  writeInfoLogStream.write(
    `${new Date().toISOString()}: ${fileName} - ${message}\n`
  );
  if (logLevel !== "info") return;
  console.log(`${fileName} ${message}`);
};

const warn = (fileName, message) => {
  writeErrorLogStream.write(
    `${new Date().toISOString()}: ${fileName} - ${message}\n`
  );
  if (logLevel === "error") return;
  console.error(`${fileName} ${message}`);
};

const error = (fileName, message) => {
  writeErrorLogStream.write(
    `${new Date().toISOString()}: ${fileName} - ${message}\n`
  );
  console.error(`${fileName} ${message}`);
};

process.on("beforeExit", () => {
  writeInfoLogStream.end();
  writeErrorLogStream.end();
});

const logger = (executedFileName) => {
  return {
    info: (message) => info(bgGreen(executedFileName), message),
    warn: (message) => warn(bgYellow(executedFileName), message),
    error: (message) => error(bgRed(executedFileName), message),
  };
};

module.exports = logger;

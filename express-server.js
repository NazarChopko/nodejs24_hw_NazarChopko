require("dotenv").config();
const config = require("config");
const express = require("express");
const morgan = require("morgan");
const rfs = require("rotating-file-stream");
const path = require("path");

const rootRouter = require("./routes");
const { fileDateGenerator } = require("./helpers/helpers");
const { info } = require("./utils/logger")("express-server:");

const app = express();
const router = express.Router();
const morganLogFormat = ":date :method :url :status";
const morganConsoleLogger = morgan(morganLogFormat);

const accessLogStream = rfs.createStream(fileDateGenerator, {
  interval: "1d",
  path: path.join(__dirname, "logs"),
});

app.use(express.json());
app.use(morganConsoleLogger);
app.use(morgan(morganLogFormat, { stream: accessLogStream }));
app.use("/api", rootRouter(router));

app.listen(config.port, () => {
  info(`server listening on ${config.port}`);
});

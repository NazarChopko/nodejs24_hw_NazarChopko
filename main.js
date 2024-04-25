const dotenv = require("dotenv").config();
const config = require("config");
const { disable } = require("colors");

const { info, error, warn } = require("./utils/logger")("main:");

if (!config.colorsEnabled) {
  disable();
}

info("The script is running!");
error("Error message");
warn("Warning message");

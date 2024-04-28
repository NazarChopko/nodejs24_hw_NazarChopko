require("dotenv").config();
const config = require("config");
const { disable } = require("colors");
const path = require("path");

const fileSync = require("./file_sync");
const { info, error, warn } = require("./utils/logger")("main:");

const sourceFolderPath = path.join(__dirname, "source");
const targetFolderPath = path.join(__dirname, "target");

if (!config.colorsEnabled) {
  disable();
}

info("The script is running!");
error("Error message");
warn("Warning message");

fileSync.startCopyFromTo(sourceFolderPath, targetFolderPath);

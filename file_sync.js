const { info, error, warn } = require("./utils/logger")("file_sync:");

const path = require("path");
const fsPromises = require("fs/promises");

const startCopyFromTo = async (sourcePath, targetPath) => {
  const res = await fsPromises.readdir(sourcePath);

  res.forEach(async (file) => {
    const targetFileStat = await fsPromises.lstat(path.join(sourcePath, file));
    const isTargetFileisDirectory = targetFileStat.isDirectory();

    if (isTargetFileisDirectory) {
      try {
        await fsPromises.mkdir(path.join(targetPath, file), {
          recursive: true,
        });
        startCopyFromTo(
          path.join(sourcePath, file),
          path.join(targetPath, file)
        );
      } catch (err) {
        error("Somethink went wrong");
      }
    } else {
      try {
        await fsPromises.cp(
          path.join(sourcePath, file),
          path.join(targetPath, file),
          {
            force: false,
            errorOnExist: true,
          }
        );
        info(`${file} file created in ${targetPath}`);
      } catch (err) {
        warn(` ${file} has already existed in ${targetPath}`);
      }
    }
  });
};

module.exports = { startCopyFromTo };

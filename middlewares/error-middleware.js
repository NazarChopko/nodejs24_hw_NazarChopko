const errorMiddleware = (err, req, res, next) => {
  const { status, message } = err;

  if (!status || !message) {
    res.status(500).json({ message: "Internal server error!" });
    return;
  }

  res.status(status).json({ message });
};

module.exports = errorMiddleware;

const userRouter = require("./userRouter");

module.exports = rootRouter = (router) => {
  userRouter("/users", router);
  return router;
};

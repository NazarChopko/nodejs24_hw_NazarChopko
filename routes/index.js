const userRouter = require("./userRouter");
const serverSideRenderRouter = require("./serverSideRenderRoute");

module.exports = rootRouter = (router) => {
  userRouter("/users", router);
  serverSideRenderRouter("/", router);

  return router;
};

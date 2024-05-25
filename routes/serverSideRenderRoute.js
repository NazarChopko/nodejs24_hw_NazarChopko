const { getAllUsers } = require("../services/user.service");

const serverSideRenderRouter = (rootPath, router) => {
  router.get(rootPath, (req, res, next) => {
    try {
      const users = getAllUsers();
      if (!users) {
        return next({ status: 404, message: "Users list is empty!" });
      }
      res.render("userListPage", { users });
    } catch (e) {
      return next({ status: 500, message: "Internal server error" });
    }
  });
};

module.exports = serverSideRenderRouter;

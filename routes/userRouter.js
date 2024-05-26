const {
  checkUserBody,
  checkUserParams,
} = require("../middlewares/users-middelware");

const { getAllUsers } = require("../services/user.service");

const userRouter = (rootPath, router) => {
  router.get(rootPath, (req, res, next) => {
    try {
      const users = getAllUsers();
      if (!users) {
        return next({ status: 404, message: "Users list is empty!" });
      }
      res.status(200).json(users);
    } catch (e) {
      return next({ status: 500, message: "Internal server error" });
    }
  });

  router.get(`${rootPath}/:userId`, checkUserParams, (req, res) => {
    res.status(200).json(req.params);
  });

  router.post(rootPath, checkUserBody, (req, res) => {
    res.status(201).json({ message: "User created" });
  });

  router.delete(`${rootPath}/:userId`, checkUserParams, (req, res) => {
    res.status(204).end();
  });
};

module.exports = userRouter;

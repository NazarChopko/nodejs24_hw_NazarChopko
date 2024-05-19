const {
  checkUserBody,
  checkUserParams,
} = require("../middlewares/users-middelware");

const userRouter = (rootPath, router) => {
  router.get(rootPath, (req, res) => {
    res.status(200).json([]);
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

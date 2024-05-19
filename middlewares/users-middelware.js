const { userIdSchema, userSchema } = require("../helpers/validationSchemas");

const checkUserParams = async (req, res, next) => {
  try {
    await userIdSchema.validate(req.params);
  } catch (error) {
    res.status(400).json(error.message);
    return;
  }
  next();
};

const checkUserBody = async (req, res, next) => {
  try {
    await userSchema.validate(req.body);
  } catch (error) {
    res.status(400).json(error.message);
    return;
  }
  next();
};

module.exports = { checkUserBody, checkUserParams };

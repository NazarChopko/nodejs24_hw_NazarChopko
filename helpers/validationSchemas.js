const yup = require("yup");

const userIdSchema = yup.object({
  userId: yup
    .number()
    .integer("userId must be an integer number")
    .min(1, "id must be greater than 0")
    .required(),
});

const userSchema = yup.object({
  userName: yup
    .string("userName must be string")
    .trim("userName must not be empty")
    .required("userName is required field!"),
  email: yup
    .string()
    .email("email is invalid")
    .required("email is required field!"),
});

module.exports = { userIdSchema, userSchema };

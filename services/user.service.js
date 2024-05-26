const { users } = require("../mockData/users");

const getAllUsers = () => {
  return users;
};

module.exports = { getAllUsers };

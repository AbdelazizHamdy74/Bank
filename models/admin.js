const databaseConfig = require("../db/config/database-connection");
const knex = databaseConfig.connect();

exports.selectOne = async (email) => {
  const banker = await knex("bankers")
    .select(["name", "password"])
    .where({
      email: email,
    })      
    .limit(1);

  return banker;
};

exports.add = async (email, name, password, salary) => {
  const banker = await knex("bankers").insert({
    email,
    name,
    password,
    salary,
  });

  return banker;
};

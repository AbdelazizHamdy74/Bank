const databaseConfig = require("../db/config/database-connection");
const knex = databaseConfig.connect();

exports.selectOne = async (id) => {
  const bAccount = await knex("bank_accounts")
    .select(["name", "password"])
    .where({
      id,
    })
    .limit(1);

  return bAccount;
};

exports.add1 = async (number, balance) => {
  const bAccount = await knex("bank_accounts").insert({
    number,
    balance,
  });

  return bAccount;
};

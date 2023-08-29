const adminValidation = require("../validations/bankAccount");
const adminModel = require("../models/bankAccount");
const loginValidation = require("../validations/bankAccount");
const databaseConfig = require("../db/config/database-connection");
const knex = databaseConfig.connect();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { number } = require("joi");

exports.add1 = async (request, response) => {
  //

  try {
    //   console.log("decodedToken :: ", request.decodedToken);
    const { number, balance } = request.body;

    // validation
    const isAdminValid = adminValidation.isValid(number, balance);
    if (!isAdminValid) {
      console.log("6666666666666");
      return response.status(400).json("Inavlid Data");
    }
    console.log(876786657);
    const added = await adminModel.add1(number, balance);
    return response.status(201).json(added);
  } catch (error) {
    response.status(400).json(error.msg);
  }
};

exports.withdrow = async (request, response) => {
  const { amount } = request.body;

  if (amount < 0) {
    return response.status(201).json("invaled amount");
  }
  if (amount != number) {
    return response.status(201).json("enter number not string");
  }

  const data = await knex("bank_accounts")
    .where("id", "=", parseInt(request.params.id))
    .decrement({ balance: amount });

  return response.status(201).json(data);
};

exports.deposite = async (request, response) => {
  const { amount } = request.body;

  if (amount < 0) {
    return response.status(201).json("invaled amount");
  }
  if (amount != number) {
    return response.status(201).json("enter number not string");
  }
  const data = await knex("bank_accounts")
    .where("id", "=", parseInt(request.params.id))
    .increment({ balance: amount });

  return response.status(201).json(data);
};

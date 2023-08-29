const adminValidation = require("../validations/admin");
const adminModel = require("../models/admin");
const loginValidation = require("../validations/login");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.add = async (request, response) => {
  //

  console.log("decodedToken :: ", request.decodedToken);
  const { name, salary, email, password } = request.body;

  // validation
  const isAdminValid = adminValidation.isValid(name, salary, email, password);
  if (!isAdminValid) {
    console.log("33333333");
    return response.status(400).json("Inavlid Data");
  }

  // query
  const adminSelect = await adminModel.selectOne(email);

  if (adminSelect[0] != null) {
    return response.status(400).json("Invalid email");
  }

  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);
  // add
  const admin = await adminModel.add(email, name, hashPassword);

  return response.status(201).json("Created");
};

exports.login = async (request, response) => {
  //
  const { email, password } = request.body;

  const isLoginValid = loginValidation.isValid(email, password);

  if (!isLoginValid) {
    console.log("1111111");
    return response.status(400).json("Inalida Data");
  }

  // query
  const admin = await adminModel.selectOne(email);

  if (admin[0] == null) {
    console.log("22222222");
    return response.status(400).json("Inavalid Email");
  }

  const isPasswordCorrect = bcrypt.compareSync(password, admin[0].password);

  if (isPasswordCorrect) {
    jwt.sign(
      {
        email: email,
        userType: "banker",
      },
      "95ggrt678",
      {},
      (error, token) => {
        return response.status(200).json({
          msg: "Success",
          token: token,
        });
      }
    );
  } else {
    return response.status(400).json("Invalid password");
  }
};

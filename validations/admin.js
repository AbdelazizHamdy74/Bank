const joi = require("joi");

exports.isValid = (name, salary, email, password) => {
  adminSchema = joi.object({
    name: joi.string().min(3).max(45).required(),
    email: joi.string().email().min(6).max(45).required(),
    password: joi.string().min(3).max(20).required(),
    salary: joi.number().greater(1).required(),
  });

  const adminValidationResult = adminSchema.validate({
    name,
    salary,
    email,
    password,
  });
  console.log(adminValidationResult.error);
  if (adminValidationResult.error) {
    return false;
  }
  return true;
};

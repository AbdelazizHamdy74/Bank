const joi = require("joi");

exports.isValid = (email, password) => {
  loginSchema = joi.object({
    email: joi.string().email().min(6).max(45).required(),
    password: joi.string().min(3).max(20).required(),
  });

  const loginValidationResult = loginSchema.validate({ email, password });

  if (loginValidationResult.error) {
    return false;
  }
  return true;
};

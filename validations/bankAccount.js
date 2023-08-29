const joi = require("joi");

exports.isValid = (number, balance) => {
  adminSchema = joi.object({
    number: joi.number().min(3).required(),
    balance: joi.number().greater(1).required(),
  });

  const adminValidationResult = adminSchema.validate({
    number,
    balance,
  });
  console.log(adminValidationResult.error);
  if (adminValidationResult.error) {
    return false;
  }
  return true;
};

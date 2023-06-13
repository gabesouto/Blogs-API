const Joi = require('joi');

const passwordSchema = Joi.number().integer().min(6).max(12)
.required();

const emailSchema = Joi.string().email().required();

module.exports = {
  passwordSchema,
  emailSchema,
};

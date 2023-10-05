import joi from 'joi';

const userRegister = joi.object({
  name: joi.string()
    .required()
    .min(2)
    //.alphanum()
    .messages({
      'any.required': 'Name is required',
      'string.empty': 'Name is required',
      'string.min': 'Name is too short',
    }),
  email: joi.string()
    .required()
    .email({ minDomainSegments: 2 })
    .messages({
      'any.required': 'Email is required',
      'string.empty': 'Email is required',
      'string.email': 'Invalid email',
    }),
  username: joi.string()
    .required()
    .min(2)
    .messages({
      'any.required': 'Username is required',
      'string.empty': 'Username is required',
    }),
  password: joi.string()
    .required()
    .min(8)
    .max(35)
    .alphanum()
    .messages({
      'any.required': 'Password is required',
      'string.empty': 'Password is required',
      'string.min': 'Password is too short',
      'string.max': 'Password is too long',
    }),
});

export default userRegister;
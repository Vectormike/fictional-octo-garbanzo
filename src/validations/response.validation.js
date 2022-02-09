const Joi = require('joi');

const createResponse = {
  body: Joi.object().keys({
    user: Joi.string().required().email(),
    question: Joi.string().required(),
    response: Joi.string().required(),
  }),
};

const getUserResponse = {
  params: Joi.object().keys({
    email: Joi.string().required().email(),
  }),
};

const getResponseToQuestion = {
  params: Joi.object().keys({
    email: Joi.string().required().email(),
    question: Joi.string().required(),
  }),
};

module.exports = {
  createResponse,
  getUserResponse,
  getResponseToQuestion,
};

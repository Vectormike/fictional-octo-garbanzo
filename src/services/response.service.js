const httpStatus = require('http-status');
const { Response } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a response
 * @param {Object} responseBody
 * @returns {Promise<response>}
 */
const createResponse = async (responseBody) => {
  return Response.create(responseBody);
};

const getAllResponses = async () => {
  const responses = await Response.find();
  return responses;
};

const getUserResponse = async (email) => {
  return Response.find({ user: email });
};

const getResponseToQuestion = async (email, question) => {
  return Response.findOne({ user: email, question });
};

module.exports = {
  createResponse,
  getAllResponses,
  getUserResponse,
  getResponseToQuestion,
};

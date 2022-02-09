const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const responseService = require('../services/response.service');

const createResponse = catchAsync(async (req, res) => {
  const response = await responseService.createResponse(req.body);
  res.status(httpStatus.CREATED).send(response);
});

const getAllResponses = catchAsync(async (req, res) => {
  const result = await responseService.getAllResponses();
  res.send(result);
});

const getUserResponse = catchAsync(async (req, res) => {
  const response = await responseService.getUserResponse(req.params.email);
  if (!response) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Response not found');
  }
  res.send(response);
});

const getResponseToQuestion = catchAsync(async (req, res) => {
  const response = await responseService.getResponseToQuestion(req.params.email, req.params.question);
  res.send(response);
});

module.exports = {
  createResponse,
  getAllResponses,
  getUserResponse,
  getResponseToQuestion,
};

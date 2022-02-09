const express = require('express');
const validate = require('../../middlewares/validate');
const responseValidation = require('../../validations/response.validation');
const responseController = require('../../controllers/response.controller');

const router = express.Router();

router.route('/create').post(validate(responseValidation.createResponse), responseController.createResponse);
router.route('/show').get(responseController.getAllResponses);

router.route('/:email').get(validate(responseValidation.getUserResponse), responseController.getUserResponse);
router
  .route('/:question/:email')
  .get(validate(responseValidation.getResponseToQuestion), responseController.getResponseToQuestion);

module.exports = router;

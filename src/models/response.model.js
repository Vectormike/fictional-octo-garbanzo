const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const userSchema = mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    response: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
userSchema.plugin(toJSON);
userSchema.plugin(paginate);

/**
 * @typedef Response
 */
const Response = mongoose.model('Response', responseSchema);

module.exports = Response;

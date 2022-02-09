const request = require('supertest');
const faker = require('faker');
const httpStatus = require('http-status');
const app = require('../../src/app');
const setupTestDB = require('../utils/setupTestDB');
const { Response } = require('../../src/models');

setupTestDB();

describe('Response routes', () => {
  describe('POST /v1/create', () => {
    let newResponse;

    beforeEach(() => {
      newResponse = {
        question: 'Question',
        email: faker.internet.email().toLowerCase(),
        response: 'Answer',
      };
    });

    test('should return 201 and successfully create new response if data is ok', async () => {
      const res = await request(app).post('/v1/create').send(newResponse).expect(httpStatus.CREATED);

      expect(res.body).not.toHaveProperty('email');
      expect(res.body).toEqual({
        id: expect.anything(),
        question: newResponse.question,
        email: newResponse.email,
        response: newResponse.response,
      });

      const dbUser = await Response.findById(res.body.id);
      expect(dbUser).toBeDefined();
    });
  });

  describe('GET /v1/show', () => {
    test('should return 200 and fetch all responses', async () => {
      const res = await request(app).get('/v1/show').send().expect(httpStatus.OK);

      expect(res.body).toEqual({
        results: expect.any(Array),
      });
    });
  });

  describe('GET User Responses', () => {
    test('should respond with 200 success', async () => {
      const res = await request(app).get(`/${newResponse.email}`).expect('Content-Type', /json/).expect(200);
    });
  });

  describe('GET User Question Response', () => {
    test('should respond with 200 success', async () => {
      const res = await request(app).get(`/${newUser.question}/${newUser.email}`).expect('Content-Type', /json/).expect(200);
    });
  });
});

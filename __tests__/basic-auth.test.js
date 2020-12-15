'use strict';

const supertest = require('supertest'); //built in crud
const { server } = require('../app');
const mockRequest = supertest(server);

describe('testing server', () => {
    it('/signup to create a new user', () => {
        return mockRequest.post('/signup')
        .send({username: "bob", password: "foo"})
        .then(res => {
            expect(res.status).toBe(200)
        })
        .catch(error => console.error(error));
    })
})
const app = require('../../src/index')
const request = require('supertest')

afterEach(() => app.close() )

test('GET /', async () => {
  const response = await request(app).get('/')
  expect(response.status).toEqual(200)
})
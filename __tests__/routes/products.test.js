const fs = require('fs').promises
const path = require('path')
const request = require('supertest')
const app = require('../../src/index')

afterEach(() => app.close() )

test('GET /products', async () => {
  const filePath = path.resolve(__dirname, '../../data/products.json')
  const expectedResponseBody = await fs.readFile(filePath, 'utf-8')

  const response = await request(app).get('/products')

  expect(response.status).toEqual(200)
  expect(response.body).toEqual(expectedResponseBody)
})
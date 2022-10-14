import request from 'supertest'
import app from '../config/app'

describe('GET /contact', () => {
  test('Should return 200 on success', async () => {
    await request(app)
      .get('/api/contact')
      .expect(200)
  })
})

import request from 'supertest'
import app from '../config/app'

describe('GET /peoples', () => {
  test('Should return 200 on success', async () => {
    await request(app)
      .get('/api/people')
      .expect(200)
  })
})

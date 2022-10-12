import { Router } from 'express'
import { makeLoadPeoplesController, makeAddPeoplesController } from '../factories/people'
import { adaptRoute } from '../adapters/express-route-adapter'
export default (router: Router): void => {
  router.get('/people', adaptRoute(makeLoadPeoplesController()))
  router.post('/people', adaptRoute(makeAddPeoplesController()))
}

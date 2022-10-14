import { Router } from 'express'
import { makeLoadPeoplesController, makeAddPeoplesController, makeUpdatePeoplesController, makeDeletePeoplesController, makeLoadSingularPeopleController } from '../factories/people'
import { adaptRoute } from '../adapters/express-route-adapter'
export default (router: Router): void => {
  router.get('/people', adaptRoute(makeLoadPeoplesController()))
  router.get('/people/:id', adaptRoute(makeLoadSingularPeopleController()))
  router.post('/people', adaptRoute(makeAddPeoplesController()))
  router.put('/people/:id', adaptRoute(makeUpdatePeoplesController()))
  router.delete('/people/:id', adaptRoute(makeDeletePeoplesController()))
}

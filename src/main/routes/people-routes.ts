import { Router } from 'express'
import { makeLoadPeoplesController } from '../factories/load-people-controller-factory'
import { adaptRoute } from '../adapters/express-route-adapter'
export default (router: Router): void => {
  router.get('/peoples', adaptRoute(makeLoadPeoplesController()))
}

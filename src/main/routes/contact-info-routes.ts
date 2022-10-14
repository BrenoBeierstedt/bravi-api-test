import { Router } from 'express'
import { makeAddContactInfosController, makeDeleteContactInfosController, makeLoadContactInfosController, makeLoadContactByPeopleIdController, makeUpdateContactsController } from '../factories/contact-info'
import { adaptRoute } from '../adapters/express-route-adapter'
export default (router: Router): void => {
  router.get('/contact', adaptRoute(makeLoadContactInfosController()))
  router.get('/contact/:id', adaptRoute(makeLoadContactByPeopleIdController()))
  router.post('/contact', adaptRoute(makeAddContactInfosController()))
  router.put('/contact/:id', adaptRoute(makeUpdateContactsController()))
  router.delete('/contact/:id', adaptRoute(makeDeleteContactInfosController()))
}

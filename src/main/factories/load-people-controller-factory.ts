import { LoadPeopleController } from '../../presentantion/controllers/people/load-people/load-people-controller'
import { DbLoadPeople } from '../../data/usecases/load-people/db-load-people'
import { PeoplePrismaRepository } from '../../infra/db/prisma/people/people-prisma-repository'

export const makeLoadPeoplesController = (): LoadPeopleController => {
  const peoplePrismaRepository = new PeoplePrismaRepository()
  const dbLoadPeople = new DbLoadPeople(peoplePrismaRepository)
  return new LoadPeopleController(dbLoadPeople)
}

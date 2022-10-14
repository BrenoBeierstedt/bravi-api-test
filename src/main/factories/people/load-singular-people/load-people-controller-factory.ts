import { LoadSingularPeopleController } from '../../../../presentantion/controllers/people/load-singular-people/load-singular-people-controller'
import { DbLoadSingularPeople } from '../../../../data/usecases/people/load-singular-people/db-load-singular-people'
import { PeoplePrismaRepository } from '../../../../infra/db/prisma/people/people-prisma-repository'

export const makeLoadSingularPeopleController = (): LoadSingularPeopleController => {
  const peoplePrismaRepository = new PeoplePrismaRepository()
  const dbLoadPeople = new DbLoadSingularPeople(peoplePrismaRepository)
  return new LoadSingularPeopleController(dbLoadPeople)
}

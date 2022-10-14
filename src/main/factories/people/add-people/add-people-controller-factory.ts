import { AddPeopleController } from '../../../../presentantion/controllers/people/add-people/add-people-controller'
import { DbAddPeople } from '../../../../data/usecases/people/add-people/db-add-people'
import { PeoplePrismaRepository } from '../../../../infra/db/prisma/people/people-prisma-repository'
import { makeAddPeopleValidation } from './add-people-validation-factory'

export const makeAddPeoplesController = (): AddPeopleController => {
  const peoplePrismaRepository = new PeoplePrismaRepository()
  const dbAddPeople = new DbAddPeople(peoplePrismaRepository)
  return new AddPeopleController(makeAddPeopleValidation(), dbAddPeople)
}

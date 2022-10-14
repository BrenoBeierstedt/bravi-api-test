import { UpdatePeopleController } from '../../../../presentantion/controllers/people/update-people/update-people-controller'
import { DbUpdatePeople } from '../../../../data/usecases/people/update-people/db-update-people'
import { PeoplePrismaRepository } from '../../../../infra/db/prisma/people/people-prisma-repository'
import { makeUpdatePeopleValidation } from './update-people-validation-factory'

export const makeUpdatePeoplesController = (): UpdatePeopleController => {
  const peoplePrismaRepository = new PeoplePrismaRepository()
  const dbUpdatePeople = new DbUpdatePeople(peoplePrismaRepository)
  return new UpdatePeopleController(makeUpdatePeopleValidation(), dbUpdatePeople)
}

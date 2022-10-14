import { DeletePeopleController } from '../../../../presentantion/controllers/people/delete-people/delete-people-controller'
import { DbDeletePeople } from '../../../../data/usecases/people/delete-people/db-delete-people'
import { PeoplePrismaRepository } from '../../../../infra/db/prisma/people/people-prisma-repository'

export const makeDeletePeoplesController = (): DeletePeopleController => {
  const peoplePrismaRepository = new PeoplePrismaRepository()
  const dbRemovePeople = new DbDeletePeople(peoplePrismaRepository)
  return new DeletePeopleController(dbRemovePeople)
}

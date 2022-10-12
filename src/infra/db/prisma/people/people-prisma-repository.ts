import { prisma } from '../../../../main/config/prisma'
import { LoadPeopleRepository, AddPeopleRepository } from '../../../../data/protocols/db/people'
import { PeopleModel } from '../../../../domain/models/people'
import { AddPeopleModel } from '../../../../domain/usecases/people/add-people'
import { serverError } from '../../../../presentantion/helpers/http-helper'

export class PeoplePrismaRepository implements LoadPeopleRepository, AddPeopleRepository {
  async loadAll (): Promise<PeopleModel[]> {
    return await prisma.people.findMany({})
  }

  async add (data: AddPeopleModel): Promise<void> {
    try {
      await prisma.people.create({ data })
    } catch (err) {
      serverError(err)
    }
  }
}

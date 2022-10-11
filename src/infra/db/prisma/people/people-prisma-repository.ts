import { prisma } from '../../../../main/config/prisma'
import { LoadPeopleRepository } from '../../../../data/protocols/db/people/load-people-repository'
import { PeopleModel } from '../../../../domain/models/people'

export class PeoplePrismaRepository implements LoadPeopleRepository {
  async loadAll (): Promise<PeopleModel[]> {
    return await prisma.people.findMany({})
  }
  // todo add, put, delete
}

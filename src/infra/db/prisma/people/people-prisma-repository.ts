import { prisma, prismaError } from '../../../../main/config/prisma'
import {
  UpdatePeopleModel,
  AddPeopleModel,
  DeletePeopleModel,
  LoadSingularPeopleModel
} from '../../../../domain/usecases/people'
import { LoadPeopleRepository, AddPeopleRepository, UpdatePeopleRepository, DeletePeopleRepository, LoadSingularPeopleRepository } from '../../../../data/protocols/db/people'
import { PeopleModel } from '../../../../domain/models/people'
import { serverError } from '../../../../presentantion/helpers/http-helper'

export class PeoplePrismaRepository implements LoadPeopleRepository, AddPeopleRepository, UpdatePeopleRepository, DeletePeopleRepository, LoadSingularPeopleRepository {
  async loadSingular (data: LoadSingularPeopleModel): Promise<PeopleModel> {
    return await prisma.people.findUnique({
      where: {
        id: data.id
      },
      include: {
        contactInfos: true
      }
    })
  }

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

  async update (data: UpdatePeopleModel): Promise<PeopleModel> {
    try {
      return await prisma.people.update({
        where: {
          id: data.id
        },
        data: {
          firstName: data.firstName,
          lastName: data.lastName,
          updatedAt: data.updatedAt
        }
      })
    } catch (err) {
      const dbError = prismaError(err)
      console.error(dbError)
      serverError(dbError)
    }
  }

  async remove (data: DeletePeopleModel): Promise<PeopleModel> {
    try {
      await prisma.contactInfo.deleteMany({
        where: { peopleId: data.id }
      })

      const aa = await prisma.people.delete({
        where: {
          id: data.id
        }
      })

      return aa
    } catch (err) {
      const dbError = prismaError(err)
      serverError(dbError)
    }
  }
}

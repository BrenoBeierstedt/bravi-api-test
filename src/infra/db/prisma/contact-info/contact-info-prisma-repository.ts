import { prisma, prismaError } from '../../../../main/config/prisma'
import { UpdateContactInfoModel, AddContactInfoModel, DeleteContactInfoModel, LoadContactByPeopleIdModel } from '../../../../domain/usecases/contact-info'
import { LoadContactInfoRepository, AddContactInfoRepository, UpdateContactInfoRepository, DeleteContactInfoRepository, LoadContactByPeopleIdRepository } from '../../../../data/protocols/db/contact-info'
import { ContactInfoModel } from '../../../../domain/models/contact-info'
import { serverError } from '../../../../presentantion/helpers/http-helper'

export class ContactInfoPrismaRepository implements LoadContactInfoRepository, AddContactInfoRepository, UpdateContactInfoRepository, DeleteContactInfoRepository, LoadContactByPeopleIdRepository {
  async loadAll (): Promise<ContactInfoModel[]> {
    return await prisma.contactInfo.findMany({})
  }

  async loadByPeopleId (data: LoadContactByPeopleIdModel): Promise<ContactInfoModel[]> {
    const aa = await prisma.contactInfo.findMany({
      where: {
        people: {
          id: data.id
        }
      }
    })
    return aa
  }

  async add (data: AddContactInfoModel): Promise<void> {
    try {
      await prisma.contactInfo.create({ data })
    } catch (err) {
      serverError(err)
    }
  }

  async update (data: UpdateContactInfoModel): Promise<ContactInfoModel> {
    try {
      return await prisma.contactInfo.update({
        where: {
          id: data.id
        },
        data: {
          type: data.type,
          info: data.info,
          updatedAt: data.updatedAt
        }
      })
    } catch (err) {
      const dbError = prismaError(err)
      console.error(dbError)
      serverError(dbError)
    }
  }

  async remove (data: DeleteContactInfoModel): Promise<ContactInfoModel> {
    try {
      const deleted = await prisma.contactInfo.delete({
        where: {
          id: data.id
        }
      })
      return deleted
    } catch (err) {
      const dbError = prismaError(err)
      console.error(dbError)
      serverError(dbError)
    }
  }
}

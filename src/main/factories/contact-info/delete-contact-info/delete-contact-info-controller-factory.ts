import { DeleteContactInfoController } from '../../../../presentantion/controllers/contact-info'
import { DbDeleteContactInfo } from '../../../../data/usecases/contact-info/delete-contact-info/db-delete-contact-info'
import { ContactInfoPrismaRepository } from '../../../../infra/db/prisma/contact-info/contact-info-prisma-repository'

export const makeDeleteContactInfosController = (): DeleteContactInfoController => {
  const contactInfoPrismaRepository = new ContactInfoPrismaRepository()
  const dbRemoveContactInfo = new DbDeleteContactInfo(contactInfoPrismaRepository)
  return new DeleteContactInfoController(dbRemoveContactInfo)
}

import { AddContactInfoController } from '../../../../presentantion/controllers/contact-info'
import { DbAddContactInfo } from '../../../../data/usecases/contact-info/add-contact-info/db-add-contact-info'
import { ContactInfoPrismaRepository } from '../../../../infra/db/prisma/contact-info/contact-info-prisma-repository'
import { makeAddContactInfoValidation } from './add-contact-info-validation-factory'

export const makeAddContactInfosController = (): AddContactInfoController => {
  const contactInfoPrismaRepository = new ContactInfoPrismaRepository()
  const dbAddContactInfo = new DbAddContactInfo(contactInfoPrismaRepository)
  return new AddContactInfoController(makeAddContactInfoValidation(), dbAddContactInfo)
}

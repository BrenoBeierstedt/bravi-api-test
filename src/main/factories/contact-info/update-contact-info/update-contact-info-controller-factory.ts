import { UpdateContactInfoController } from '../../../../presentantion/controllers/contact-info'
import { DbUpdateContactInfo } from '../../../../data/usecases/contact-info/update-contact-info/db-update-contact-info'
import { ContactInfoPrismaRepository } from '../../../../infra/db/prisma/contact-info/contact-info-prisma-repository'
import { makeUpdateContactValidation } from './update-contact-info-validation-factory'

export const makeUpdateContactsController = (): UpdateContactInfoController => {
  const contactInfoPrismaRepository = new ContactInfoPrismaRepository()
  const dbUpdateContactInfo = new DbUpdateContactInfo(contactInfoPrismaRepository)
  return new UpdateContactInfoController(makeUpdateContactValidation(), dbUpdateContactInfo)
}

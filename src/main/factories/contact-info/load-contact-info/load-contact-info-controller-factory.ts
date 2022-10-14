import { LoadContactInfoController } from '../../../../presentantion/controllers/contact-info'
import { DbLoadContactInfo } from '../../../../data/usecases/contact-info/load-contact-info/db-load-contact-info'
import { ContactInfoPrismaRepository } from '../../../../infra/db/prisma/contact-info/contact-info-prisma-repository'

export const makeLoadContactInfosController = (): LoadContactInfoController => {
  const contactInfoPrismaRepository = new ContactInfoPrismaRepository()
  const dbLoadContactInfo = new DbLoadContactInfo(contactInfoPrismaRepository)
  return new LoadContactInfoController(dbLoadContactInfo)
}

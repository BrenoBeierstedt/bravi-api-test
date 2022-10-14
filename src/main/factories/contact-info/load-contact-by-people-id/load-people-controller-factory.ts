import { LoadContactByPeopleIdController } from '../../../../presentantion/controllers/contact-info/load-contact-by-people-id/load-contact-by-people-id-controller'
import { DbLoadContactByPeopleId } from '../../../../data/usecases/contact-info/load-contact-by-people-id/db-load-contact-by-people-id'
import { ContactInfoPrismaRepository } from '../../../../infra/db/prisma/contact-info/contact-info-prisma-repository'

export const makeLoadContactByPeopleIdController = (): LoadContactByPeopleIdController => {
  const contactPrismaRepository = new ContactInfoPrismaRepository()
  const dbLoadContact = new DbLoadContactByPeopleId(contactPrismaRepository)
  return new LoadContactByPeopleIdController(dbLoadContact)
}

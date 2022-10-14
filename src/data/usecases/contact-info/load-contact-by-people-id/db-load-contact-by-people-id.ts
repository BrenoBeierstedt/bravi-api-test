import { LoadContactByPeopleId, LoadContactByPeopleIdModel } from '../../../../domain/usecases/contact-info'
import { LoadContactByPeopleIdRepository } from '../../../protocols/db/contact-info'
import { ContactInfoModel } from '../../../../domain/models/contact-info'

export class DbLoadContactByPeopleId implements LoadContactByPeopleId {
  constructor (private readonly loadContactByPeopleId: LoadContactByPeopleIdRepository) {}
  async loadByPeopleId (data: LoadContactByPeopleIdModel): Promise<ContactInfoModel[]> {
    const contact = await this.loadContactByPeopleId.loadByPeopleId(data)
    return contact
  }
}

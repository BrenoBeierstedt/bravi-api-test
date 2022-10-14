import { AddContactInfo, AddContactInfoModel } from '../../../../domain/usecases/contact-info'
import { AddContactInfoRepository } from '../../../protocols/db/contact-info'

export class DbAddContactInfo implements AddContactInfo {
  constructor (private readonly addContactInfoRepository: AddContactInfoRepository) {}
  async add (data: AddContactInfoModel): Promise<void> {
    await this.addContactInfoRepository.add(data)
  }
}

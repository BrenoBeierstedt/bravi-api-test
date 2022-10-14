import { UpdateContactInfo, UpdateContactInfoModel } from '../../../../domain/usecases/contact-info'
import { UpdateContactInfoRepository } from '../../../protocols/db/contact-info'
import { ContactInfoModel } from '../../../../domain/models/contact-info'

export class DbUpdateContactInfo implements UpdateContactInfo {
  constructor (private readonly updateContactInfoRepository: UpdateContactInfoRepository) {}
  async update (data: UpdateContactInfoModel): Promise<ContactInfoModel> {
    return await this.updateContactInfoRepository.update(data)
  }
}

import { DeleteContactInfo, DeleteContactInfoModel } from '../../../../domain/usecases/contact-info'
import { DeleteContactInfoRepository } from '../../../protocols/db/contact-info'
import { ContactInfoModel } from '../../../../domain/models/contact-info'

export class DbDeleteContactInfo implements DeleteContactInfo {
  constructor (private readonly deleteContactInfoRepository: DeleteContactInfoRepository) {}
  async remove (data: DeleteContactInfoModel): Promise<ContactInfoModel> {
    return await this.deleteContactInfoRepository.remove(data)
  }
}

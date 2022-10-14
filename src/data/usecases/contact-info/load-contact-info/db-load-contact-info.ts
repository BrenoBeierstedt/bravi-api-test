import { LoadContactInfo } from '../../../../domain/usecases/contact-info'
import { ContactInfoModel } from '../../../../domain/models/contact-info'
import { LoadContactInfoRepository } from '../../../protocols/db/contact-info'

export class DbLoadContactInfo implements LoadContactInfo {
  constructor (private readonly loadContactInfoRepository: LoadContactInfoRepository) {}
  async load (): Promise<ContactInfoModel[]> {
    const contactInfo = await this.loadContactInfoRepository.loadAll()
    return contactInfo
  }
}

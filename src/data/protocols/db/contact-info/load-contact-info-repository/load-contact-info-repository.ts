import { ContactInfoModel } from '../../../../../domain/models/contact-info'

export interface LoadContactInfoRepository {
  loadAll: () => Promise<ContactInfoModel[]>
}

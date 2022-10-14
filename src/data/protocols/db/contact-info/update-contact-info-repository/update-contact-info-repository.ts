import { UpdateContactInfoModel } from '../../../../../domain/usecases/contact-info'
import { ContactInfoModel } from '../../../../../domain/models/contact-info'

export interface UpdateContactInfoRepository {
  update: (data: UpdateContactInfoModel) => Promise<ContactInfoModel>
}

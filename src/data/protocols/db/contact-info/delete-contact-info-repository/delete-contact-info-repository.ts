import { DeleteContactInfoModel } from '../../../../../domain/usecases/contact-info'
import { ContactInfoModel } from '../../../../../domain/models/contact-info'

export interface DeleteContactInfoRepository {
  remove: (data: DeleteContactInfoModel) => Promise<ContactInfoModel>
}

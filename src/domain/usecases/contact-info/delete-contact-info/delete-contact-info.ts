import { ContactInfoModel } from '../../../models/contact-info'

export interface DeleteContactInfoModel {
  id: string
}

export interface DeleteContactInfo {
  remove: (remove: DeleteContactInfoModel) => Promise<ContactInfoModel>
}

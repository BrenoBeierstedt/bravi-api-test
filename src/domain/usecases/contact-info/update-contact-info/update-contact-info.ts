import { ContactInfoModel } from '../../../models/contact-info'

export interface UpdateContactInfoModel {
  id: string
  type: string
  info: string
  peopleId?: string
  createdAt?: Date
  updatedAt?: Date
}

export interface UpdateContactInfo {
  update: (update: UpdateContactInfoModel) => Promise<ContactInfoModel>
}

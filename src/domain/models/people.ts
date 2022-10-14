import { ContactInfoModel } from './contact-info'

export interface PeopleModel {
  id: string
  firstName: string
  lastName: string
  createdAt: Date
  updatedAt: Date
  contacts?: ContactInfoModel[]
}

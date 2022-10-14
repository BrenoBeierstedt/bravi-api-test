import { ContactInfoModel } from '../../../models/contact-info'

export interface LoadContactByPeopleIdModel {
  id: string
}

export interface LoadContactByPeopleId {
  loadByPeopleId: (load: LoadContactByPeopleIdModel) => Promise<ContactInfoModel[]>
}

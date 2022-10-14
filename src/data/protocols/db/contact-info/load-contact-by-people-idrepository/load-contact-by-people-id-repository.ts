import { ContactInfoModel } from '../../../../../domain/models/contact-info'
import { LoadContactByPeopleIdModel } from '../../../../../domain/usecases/contact-info'

export interface LoadContactByPeopleIdRepository {
  loadByPeopleId: (data: LoadContactByPeopleIdModel) => Promise<ContactInfoModel[]>
}

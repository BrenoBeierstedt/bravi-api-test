import { AddContactInfoModel } from '../../../../../domain/usecases/contact-info'

export interface AddContactInfoRepository {
  add: (data: AddContactInfoModel) => Promise<void>
}

import { AddPeopleModel } from '../../../../../domain/usecases/people'

export interface AddPeopleRepository {
  add: (data: AddPeopleModel) => Promise<void>
}

import { AddPeopleModel } from '../../../../domain/usecases/people/add-people'

export interface AddPeopleRepository {
  add: (data: AddPeopleModel) => Promise<void>
}

import { UpdatePeopleModel } from '../../../../../domain/usecases/people'
import { PeopleModel } from '../../../../../domain/models/people'

export interface UpdatePeopleRepository {
  update: (data: UpdatePeopleModel) => Promise<PeopleModel>
}

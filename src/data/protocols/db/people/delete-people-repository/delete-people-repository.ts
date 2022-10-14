import { DeletePeopleModel } from '../../../../../domain/usecases/people'
import { PeopleModel } from '../../../../../domain/models/people'

export interface DeletePeopleRepository {
  remove: (data: DeletePeopleModel) => Promise<PeopleModel>
}

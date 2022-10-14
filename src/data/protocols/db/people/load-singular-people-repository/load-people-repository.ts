import { PeopleModel } from '../../../../../domain/models/people'
import { LoadSingularPeopleModel } from '../../../../../domain/usecases/people'

export interface LoadSingularPeopleRepository {
  loadSingular: (data: LoadSingularPeopleModel) => Promise<PeopleModel>
}

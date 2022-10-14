import { PeopleModel } from '../../../../../domain/models/people'

export interface LoadPeopleRepository {
  loadAll: () => Promise<PeopleModel[]>
}

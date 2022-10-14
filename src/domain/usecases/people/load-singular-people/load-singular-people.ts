import { PeopleModel } from '../../../models/people'

export interface LoadSingularPeopleModel {
  id: string
}

export interface LoadSingularPeople {
  loadSingular: (load: LoadSingularPeopleModel) => Promise<PeopleModel>
}

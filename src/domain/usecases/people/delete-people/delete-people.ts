import { PeopleModel } from '../../../models/people'

export interface DeletePeopleModel {
  id: string
}

export interface DeletePeople {
  remove: (remove: DeletePeopleModel) => Promise<PeopleModel>
}

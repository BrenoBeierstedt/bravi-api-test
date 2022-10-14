import { PeopleModel } from '../../../models/people'

export interface UpdatePeopleModel {
  id: string
  firstName: string
  lastName: string
  createdAt?: Date
  updatedAt?: Date
}

export interface UpdatePeople {
  update: (update: UpdatePeopleModel) => Promise<PeopleModel>
}

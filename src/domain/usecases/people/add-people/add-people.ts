export interface AddPeopleModel {
  firstName: string
  lastName: string
  createdAt?: Date
  updatedAt?: Date
}

export interface AddPeople {
  add: (add: AddPeopleModel) => Promise<void>
}

export interface AddContactInfoModel {
  type: string
  info: string
  peopleId: string
}

export interface AddContactInfo {
  add: (add: AddContactInfoModel) => Promise<void>
}

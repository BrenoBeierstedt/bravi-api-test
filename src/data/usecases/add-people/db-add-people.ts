import { AddPeople, AddPeopleModel } from '../../../domain/usecases/people/add-people'
import { AddPeopleRepository } from '../../protocols/db/people/add-people-repository'

export class DbAddPeople implements AddPeople {
  constructor (private readonly addPeopleRepository: AddPeopleRepository) {}
  async add (data: AddPeopleModel): Promise<void> {
    await this.addPeopleRepository.add(data)
  }
}

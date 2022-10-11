import { LoadPeople } from '../../../domain/usecases/load-people'
import { PeopleModel } from '../../../domain/models/people'
import { LoadPeopleRepository } from '../../protocols/db/people/load-people-repository'

export class DbLoadPeople implements LoadPeople {
  constructor (private readonly loadPeopleRepository: LoadPeopleRepository) {}
  async load (): Promise<PeopleModel[]> {
    const people = await this.loadPeopleRepository.loadAll()
    return people
  }
}

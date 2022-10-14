import { LoadPeople } from '../../../../domain/usecases/people'
import { PeopleModel } from '../../../../domain/models/people'
import { LoadPeopleRepository } from '../../../protocols/db/people'

export class DbLoadPeople implements LoadPeople {
  constructor (private readonly loadSingularPeopleRepository: LoadPeopleRepository) {}
  async load (): Promise<PeopleModel[]> {
    const people = await this.loadSingularPeopleRepository.loadAll()
    return people
  }
}

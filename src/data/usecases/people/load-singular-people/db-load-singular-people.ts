import { LoadSingularPeople, LoadSingularPeopleModel } from '../../../../domain/usecases/people'
import { PeopleModel } from '../../../../domain/models/people'
import { LoadSingularPeopleRepository } from '../../../protocols/db/people/load-singular-people-repository/load-people-repository'

export class DbLoadSingularPeople implements LoadSingularPeople {
  constructor (private readonly loadSingularPeopleRepository: LoadSingularPeopleRepository) {}
  async loadSingular (data: LoadSingularPeopleModel): Promise<PeopleModel> {
    const people = await this.loadSingularPeopleRepository.loadSingular(data)
    return people
  }
}

import { UpdatePeople, UpdatePeopleModel } from '../../../../domain/usecases/people'
import { UpdatePeopleRepository } from '../../../protocols/db/people'
import { PeopleModel } from '../../../../domain/models/people'

export class DbUpdatePeople implements UpdatePeople {
  constructor (private readonly updatePeopleRepository: UpdatePeopleRepository) {}
  async update (data: UpdatePeopleModel): Promise<PeopleModel> {
    return await this.updatePeopleRepository.update(data)
  }
}

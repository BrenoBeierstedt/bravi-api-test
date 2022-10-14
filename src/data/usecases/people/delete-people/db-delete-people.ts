import { DeletePeople, DeletePeopleModel } from '../../../../domain/usecases/people'
import { DeletePeopleRepository } from '../../../protocols/db/people'
import { PeopleModel } from '../../../../domain/models/people'

export class DbDeletePeople implements DeletePeople {
  constructor (private readonly deletePeopleRepository: DeletePeopleRepository) {}
  async remove (data: DeletePeopleModel): Promise<PeopleModel> {
    return await this.deletePeopleRepository.remove(data)
  }
}

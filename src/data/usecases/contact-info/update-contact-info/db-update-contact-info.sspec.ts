import { UpdatePeopleRepository } from '../../../protocols/db/people'
import { DbUpdateContactInfo } from './db-update-contact-info'
import { UpdatePeopleModel } from '../../../../domain/usecases/people'

const makeFakePeople = (): UpdatePeopleModel => {
  return {
    id: 'some_id',
    firstName: 'some_first_name',
    lastName: 'some_last_name'
  }
}

interface SutTypes {
  sut: DbUpdateContactInfo
  updatePeopleRepositoryStub: UpdatePeopleRepository
}

const makeUpdatePeopleRepository = (): UpdatePeopleRepository => {
  class UpdatePeopleRepositoryStub implements UpdatePeopleRepository {
    async update (data: UpdatePeopleModel): Promise<UpdatePeopleModel> {
      return new Promise((resolve) => resolve())
    }
  }
  return new UpdatePeopleRepositoryStub()
}

const makeSut = (): SutTypes => {
  const updatePeopleRepositoryStub = makeUpdatePeopleRepository()
  const sut = new DbUpdateContactInfo(updatePeopleRepositoryStub)
  return { sut, updatePeopleRepositoryStub }
}

describe('DbUpdatePeople Usecase', () => {
  test('Should call UpdatePeopleRepository with correct values', async () => {
    const { sut, updatePeopleRepositoryStub } = makeSut()
    const updateSpy = jest.spyOn(updatePeopleRepositoryStub, 'update')
    const peopleData = makeFakePeople()
    await sut.update(peopleData)
    expect(updateSpy).toHaveBeenCalledWith(peopleData)
  })

  test('Should throw if UpdatePeopleRepository throws', async () => {
    const { sut, updatePeopleRepositoryStub } = makeSut()
    jest.spyOn(updatePeopleRepositoryStub, 'update').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const promise = sut.update(makeFakePeople())
    await expect(promise).rejects.toThrow()
  })
})

import { AddPeopleRepository } from '../../protocols/db/people/add-people-repository'
import { DbAddPeople } from './db-add-people'
import { AddPeopleModel } from '../../../domain/usecases/people/add-people'

const makeFakePeople = (): AddPeopleModel => {
  return {
    firstName: 'some_first_name',
    lastName: 'some_last_name'
  }
}

interface SutTypes {
  sut: DbAddPeople
  addPeopleRepositoryStub: AddPeopleRepository
}

const makeAddPeopleRepository = (): AddPeopleRepository => {
  class AddPeopleRepositoryStub implements AddPeopleRepository {
    async add (data: AddPeopleModel): Promise<void> {
      return new Promise((resolve) => resolve())
    }
  }
  return new AddPeopleRepositoryStub()
}

const makeSut = (): SutTypes => {
  const addPeopleRepositoryStub = makeAddPeopleRepository()
  const sut = new DbAddPeople(addPeopleRepositoryStub)
  return { sut, addPeopleRepositoryStub }
}

describe('DbAddPeople Usecase', () => {
  test('Should call AddPeopleRepository with correct values', async () => {
    const { sut, addPeopleRepositoryStub } = makeSut()
    const addSpy = jest.spyOn(addPeopleRepositoryStub, 'add')
    const peopleData = makeFakePeople()
    await sut.add(peopleData)
    expect(addSpy).toHaveBeenCalledWith(peopleData)
  })

  test('Should throw if AddPeopleRepository throws', async () => {
    const { sut, addPeopleRepositoryStub } = makeSut()
    jest.spyOn(addPeopleRepositoryStub, 'add').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const promise = sut.add(makeFakePeople())
    await expect(promise).rejects.toThrow()
  })
})

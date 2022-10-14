import { LoadPeopleRepository } from '../../../protocols/db/people/load-people-repository/load-people-repository'
import { PeopleModel } from '../../../../domain/models/people'
import { DbLoadPeople } from './db-load-people'

const makeFakePeople = (): PeopleModel[] => {
  return [{
    id: 'some_id',
    firstName: 'some_first_name',
    lastName: 'some_last_name',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'another_id',
    firstName: 'another_first_name',
    lastName: 'another_last_name',
    createdAt: new Date(),
    updatedAt: new Date()
  }
  ]
}

interface SutTypes {
  sut: DbLoadPeople
  loadPeopleRepositorystub: LoadPeopleRepository
}

const makeLoadPeopleRepository = (): LoadPeopleRepository => {
  class LoadPeopleRepositoryStub implements LoadPeopleRepository {
    async loadAll (): Promise<PeopleModel[]> {
      return new Promise<PeopleModel[]>((resolve) => resolve(makeFakePeople()))
    }
  }
  return new LoadPeopleRepositoryStub()
}

const makeSut = (): SutTypes => {
  const loadPeopleRepositorystub = makeLoadPeopleRepository()
  const sut = new DbLoadPeople(loadPeopleRepositorystub)
  return { sut, loadPeopleRepositorystub }
}

describe('DbLoadPeople', () => {
  test('Should call LoadPeopleRepository', async () => {
    const { sut, loadPeopleRepositorystub } = makeSut()
    const loadAllSpy = jest.spyOn(loadPeopleRepositorystub, 'loadAll')
    await sut.load()
    expect(loadAllSpy).toHaveBeenCalled()
  })

  test('Should return a list of People on success', async () => {
    const { sut } = makeSut()
    const people = await sut.load()
    expect(people).toEqual(makeFakePeople())
  })

  test('Should throw if LoadPeopleRepository throws', async () => {
    const { sut, loadPeopleRepositorystub } = makeSut()
    jest.spyOn(loadPeopleRepositorystub, 'loadAll').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const promise = sut.load()
    await expect(promise).rejects.toThrow()
  })
})

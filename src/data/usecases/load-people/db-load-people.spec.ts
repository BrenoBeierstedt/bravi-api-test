import { LoadPeopleRepository } from '../../protocols/db/people/load-people-repository'
import { PeopleModel } from '../../../domain/models/people'
import { DbLoadPeople } from './db-load-people'

const makeFakeExample = (): PeopleModel[] => {
  return [{
    id: 'some_id',
    firstName: 'some_first_name',
    lastName: 'some_last_name',
    profilePicture: 'https://robohash.org/liberoquameligendi.png?size=100x100&set=set1',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'another_id',
    firstName: 'another_first_name',
    lastName: 'another_last_name',
    profilePicture: 'https://robohash.org/liberoquameligendi.png?size=100x100&set=set1',
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
      return new Promise<PeopleModel[]>((resolve) => resolve(makeFakeExample()))
    }
  }
  return new LoadPeopleRepositoryStub()
}

const makeSut = (): SutTypes => {
  const loadPeopleRepositorystub = makeLoadPeopleRepository()
  const sut = new DbLoadPeople(loadPeopleRepositorystub)
  return { sut, loadPeopleRepositorystub }
}

describe('DbLoadExample', () => {
  test('Should call LoadExampleRepository', async () => {
    const { sut, loadPeopleRepositorystub } = makeSut()
    const loadAllSpy = jest.spyOn(loadPeopleRepositorystub, 'loadAll')
    await sut.load()
    expect(loadAllSpy).toHaveBeenCalled()
  })

  test('Should return a list of Example on success', async () => {
    const { sut } = makeSut()
    const example = await sut.load()
    expect(example).toEqual(makeFakeExample())
  })

  test('Should throw if LoadPeopleRepository throws', async () => {
    const { sut, loadPeopleRepositorystub } = makeSut()
    jest.spyOn(loadPeopleRepositorystub, 'loadAll').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const promise = sut.load()
    await expect(promise).rejects.toThrow()
  })
})

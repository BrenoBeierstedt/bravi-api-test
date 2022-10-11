import { LoadPeopleController } from './load-people-controller'
import { LoadPeople, PeopleModel } from './load-people-controller-protocols'
import MockDate from 'mockdate'
import { noContent, ok, serverError } from '../../../helpers/http-helper'

const makeFakePeoples = (): PeopleModel[] => {
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
  sut: LoadPeopleController
  loadPeoplesStub: LoadPeople
}

const makeLoadPeoples = (): LoadPeople => {
  class LoadPeoplesStub implements LoadPeople {
    async load (): Promise<PeopleModel[]> {
      return new Promise(resolve => resolve(makeFakePeoples()))
    }
  }
  return new LoadPeoplesStub()
}

const makeSut = (): SutTypes => {
  const loadPeoplesStub = makeLoadPeoples()
  const sut = new LoadPeopleController(loadPeoplesStub)
  return { sut, loadPeoplesStub }
}

describe('LoadPeople Controller', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })
  afterAll(() => {
    MockDate.reset()
  })

  test('Should call LoadPeople', async () => {
    const { sut, loadPeoplesStub } = makeSut()
    const loadSpy = jest.spyOn(loadPeoplesStub, 'load')
    await sut.handle({})
    expect(loadSpy).toHaveBeenCalled()
  })

  test('Should return 200 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle({})
    expect(httpResponse).toEqual(ok(makeFakePeoples()))
  })

  test('Should return 204 if LoadPeople return empty', async () => {
    const { sut, loadPeoplesStub } = makeSut()
    jest.spyOn(loadPeoplesStub, 'load').mockReturnValueOnce(new Promise((resolve, reject) => resolve([])))
    const httpResponse = await sut.handle({})
    expect(httpResponse).toEqual(noContent())
  })

  test('Should return 500 if LoadPeople throws', async () => {
    const { sut, loadPeoplesStub } = makeSut()
    jest.spyOn(loadPeoplesStub, 'load').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const httpResponse = await sut.handle({})
    expect(httpResponse).toEqual(serverError())
  })
})

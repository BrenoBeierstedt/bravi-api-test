import { AddPeopleController } from './add-people-controller'
import { AddPeople, HttpRequest, AddPeopleModel } from './add-people-controller-protocols'
import { badRequest, noContent, serverError } from '../../../helpers/http-helper'
import { Validation } from '../../../protocols/validation'

const makeFakeRequest = (): HttpRequest => ({
  body: {
    firstName: 'some_first_name',
    lastName: 'some_last_name'
  }
})

interface SutTypes {
  sut: AddPeopleController
  validationStub: Validation
  addPeopleStub: AddPeople
}

const makeValidation = (): Validation => {
  class ValidationStub implements Validation {
    validate (input: any): Error {
      return null
    }
  }
  return new ValidationStub()
}

const makeAddPeople = (): AddPeople => {
  class AddPeopleStub implements AddPeople {
    async add (data: AddPeopleModel): Promise<void> {
      return new Promise(resolve => resolve())
    }
  }
  return new AddPeopleStub()
}

const makeSut = (): SutTypes => {
  const validationStub = makeValidation()
  const addPeopleStub = makeAddPeople()
  const sut = new AddPeopleController(validationStub, addPeopleStub)

  return {
    sut,
    validationStub,
    addPeopleStub
  }
}

describe('AddPeople Controller', () => {
  test('Should call validation with correct values', async () => {
    const { sut, validationStub } = makeSut()
    const validationSpy = jest.spyOn(validationStub, 'validate')
    const httpRequest = makeFakeRequest()
    await sut.handle(httpRequest)
    expect(validationSpy).toHaveBeenCalledWith(httpRequest.body)
  })

  test('Should return 400 if validation fails', async () => {
    const { sut, validationStub } = makeSut()
    jest.spyOn(validationStub, 'validate').mockReturnValueOnce(new Error())
    const httpRequest = makeFakeRequest()
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(badRequest(new Error()))
  })

  test('Should call AddPeople with correct values', async () => {
    const { sut, addPeopleStub } = makeSut()
    const addSpy = jest.spyOn(addPeopleStub, 'add')
    const httpRequest = makeFakeRequest()
    await sut.handle(httpRequest)
    expect(addSpy).toHaveBeenCalledWith(httpRequest.body)
  })

  test('Should return 500 if throws', async () => {
    const { sut, addPeopleStub } = makeSut()
    jest.spyOn(addPeopleStub, 'add').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const httpResponse = await sut.handle(makeFakeRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  test('Should return 204 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(makeFakeRequest())
    expect(httpResponse).toEqual(noContent())
  })
})

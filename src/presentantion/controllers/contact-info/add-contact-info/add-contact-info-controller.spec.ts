import { AddContactInfoController } from './add-contact-info-controller'
import { AddContactInfo, HttpRequest, AddContactInfoModel } from './add-contact-info-controller-protocols'
import { badRequest, noContent, serverError } from '../../../helpers/http-helper'
import { Validation } from '../../../protocols'

const makeFakeRequest = (): HttpRequest => ({
  body: {
    type: 'some_first_name',
    info: 'some_last_name',
    peopleId: 'some_people_id'
  }
})

interface SutTypes {
  sut: AddContactInfoController
  validationStub: Validation
  addContactInfoStub: AddContactInfo
}

const makeValidation = (): Validation => {
  class ValidationStub implements Validation {
    validate (input: any): Error {
      return null
    }
  }
  return new ValidationStub()
}

const makeAddContactInfo = (): AddContactInfo => {
  class AddContactInfoStub implements AddContactInfo {
    async add (data: AddContactInfoModel): Promise<void> {
      return new Promise(resolve => resolve())
    }
  }
  return new AddContactInfoStub()
}

const makeSut = (): SutTypes => {
  const validationStub = makeValidation()
  const addContactInfoStub = makeAddContactInfo()
  const sut = new AddContactInfoController(validationStub, addContactInfoStub)

  return {
    sut,
    validationStub,
    addContactInfoStub
  }
}

describe('AddContactInfo Controller', () => {
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

  test('Should call AddContactInfo with correct values', async () => {
    const { sut, addContactInfoStub } = makeSut()
    const addSpy = jest.spyOn(addContactInfoStub, 'add')
    const httpRequest = makeFakeRequest()
    await sut.handle(httpRequest)
    expect(addSpy).toHaveBeenCalledWith(httpRequest.body)
  })

  test('Should return 500 if throws', async () => {
    const { sut, addContactInfoStub } = makeSut()
    jest.spyOn(addContactInfoStub, 'add').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const httpResponse = await sut.handle(makeFakeRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  test('Should return 204 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(makeFakeRequest())
    expect(httpResponse).toEqual(noContent())
  })
})

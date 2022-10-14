import { AddContactInfoRepository } from '../../../protocols/db/contact-info'
import { DbAddContactInfo } from './db-add-contact-info'
import { AddContactInfoModel } from '../../../../domain/usecases/contact-info'

const makeFakeContactInfo = (): AddContactInfoModel => {
  return {
    type: 'some_first_name',
    info: 'some_last_name',
    peopleId: 'some_people_id'
  }
}

interface SutTypes {
  sut: DbAddContactInfo
  addContactInfoRepositoryStub: AddContactInfoRepository
}

const makeAddContactInfoRepository = (): AddContactInfoRepository => {
  class AddContactInfoRepositoryStub implements AddContactInfoRepository {
    async add (data: AddContactInfoModel): Promise<void> {
      return new Promise((resolve) => resolve())
    }
  }
  return new AddContactInfoRepositoryStub()
}

const makeSut = (): SutTypes => {
  const addContactInfoRepositoryStub = makeAddContactInfoRepository()
  const sut = new DbAddContactInfo(addContactInfoRepositoryStub)
  return { sut, addContactInfoRepositoryStub }
}

describe('DbAddContactInfo Usecase', () => {
  test('Should call AddContactInfoRepository with correct values', async () => {
    const { sut, addContactInfoRepositoryStub } = makeSut()
    const addSpy = jest.spyOn(addContactInfoRepositoryStub, 'add')
    const contactInfoData = makeFakeContactInfo()
    await sut.add(contactInfoData)
    expect(addSpy).toHaveBeenCalledWith(contactInfoData)
  })

  test('Should throw if AddContactInfoRepository throws', async () => {
    const { sut, addContactInfoRepositoryStub } = makeSut()
    jest.spyOn(addContactInfoRepositoryStub, 'add').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const promise = sut.add(makeFakeContactInfo())
    await expect(promise).rejects.toThrow()
  })
})

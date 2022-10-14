import { Controller, HttpRequest, HttpResponse, AddContactInfo } from './add-contact-info-controller-protocols'
import { badRequest, noContent, serverError } from '../../../helpers/http-helper'
import { Validation } from '../../../protocols'

export class AddContactInfoController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addContactInfo: AddContactInfo
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { type, info, peopleId } = httpRequest.body
      await this.addContactInfo.add({
        type,
        info,
        peopleId
      })

      return noContent()
    } catch (err) {
      return serverError(err)
    }
  }
}

import { Controller, HttpRequest, HttpResponse, UpdateContactInfo } from './update-contact-info-controller-protocols'
import { badRequest, ok, serverError } from '../../../helpers/http-helper'
import { Validation } from '../../../protocols'

export class UpdateContactInfoController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly updateContactInfo: UpdateContactInfo
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { id } = httpRequest.params
      const { type, info } = httpRequest.body
      const contact = await this.updateContactInfo.update({
        id,
        type,
        info,
        updatedAt: new Date()
      })
      return contact ? ok(contact) : badRequest('Invalid ID')
    } catch (err) {
      return serverError(err)
    }
  }
}

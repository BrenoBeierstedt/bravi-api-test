import { Controller, HttpRequest, HttpResponse, DeleteContactInfo } from './delete-contact-info-controller-protocols'
import { badRequest, ok, serverError } from '../../../helpers/http-helper'

export class DeleteContactInfoController implements Controller {
  constructor (
    private readonly deleteContact: DeleteContactInfo
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params
      const contact = await this.deleteContact.remove({
        id
      })
      return contact ? ok(contact) : badRequest('Invalid ID')
    } catch (err) {
      return serverError(err)
    }
  }
}

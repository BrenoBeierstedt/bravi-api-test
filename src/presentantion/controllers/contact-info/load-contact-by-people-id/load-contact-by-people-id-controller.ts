import { Controller, HttpRequest, HttpResponse, LoadContactByPeopleId } from './load-contact-by-people-id-controller-protocols'
import { noContent, ok, serverError } from '../../../helpers/http-helper'

export class LoadContactByPeopleIdController implements Controller {
  constructor (private readonly loadContactByPeopleId: LoadContactByPeopleId) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params

      const contact = await this.loadContactByPeopleId.loadByPeopleId({ id })
      return contact ? ok(contact) : noContent()
    } catch (err) {
      return serverError(err)
    }
  }
}

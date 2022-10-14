import { Controller, HttpRequest, HttpResponse, DeletePeople } from './delete-people-controller-protocols'
import { badRequest, ok, serverError } from '../../../helpers/http-helper'

export class DeletePeopleController implements Controller {
  constructor (
    private readonly deletePeople: DeletePeople
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params
      const people = await this.deletePeople.remove({
        id
      })
      return people ? ok(people) : badRequest('Invalid ID')
    } catch (err) {
      return serverError(err)
    }
  }
}

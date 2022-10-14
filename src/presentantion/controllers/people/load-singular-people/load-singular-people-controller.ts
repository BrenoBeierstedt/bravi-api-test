import { Controller, HttpRequest, HttpResponse, LoadSingularPeople } from './load-singular-people-controller-protocols'
import { noContent, ok, serverError } from '../../../helpers/http-helper'

export class LoadSingularPeopleController implements Controller {
  constructor (private readonly loadSingularPeople: LoadSingularPeople) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params

      const people = await this.loadSingularPeople.loadSingular({ id })
      return people ? ok(people) : noContent()
    } catch (err) {
      return serverError(err)
    }
  }
}

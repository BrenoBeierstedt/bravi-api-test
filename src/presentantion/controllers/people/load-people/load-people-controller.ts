import { Controller, HttpRequest, HttpResponse, LoadPeople } from './load-people-controller-protocols'
import { noContent, ok, serverError } from '../../../helpers/http-helper'

export class LoadPeopleController implements Controller {
  constructor (private readonly loadPeoples: LoadPeople) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const peoples = await this.loadPeoples.load()
      return peoples.length ? ok(peoples) : noContent()
    } catch (err) {
      return serverError(err)
    }
  }
}

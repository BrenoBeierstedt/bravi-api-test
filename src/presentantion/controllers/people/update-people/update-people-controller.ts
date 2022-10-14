import { Controller, HttpRequest, HttpResponse, UpdatePeople } from './update-people-controller-protocols'
import { badRequest, ok, serverError } from '../../../helpers/http-helper'
import { Validation } from '../../../protocols'

export class UpdatePeopleController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly updatePeople: UpdatePeople
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { id } = httpRequest.params
      const { firstName, lastName } = httpRequest.body
      const people = await this.updatePeople.update({
        id,
        firstName,
        lastName,
        updatedAt: new Date()
      })
      return people ? ok(people) : badRequest('Invalid ID')
    } catch (err) {
      return serverError(err)
    }
  }
}

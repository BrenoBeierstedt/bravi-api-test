import { Controller, HttpRequest, HttpResponse, AddPeople } from './add-people-controller-protocols'
import { badRequest, noContent, serverError } from '../../../helpers/http-helper'
import { Validation } from '../../../protocols/validation'

export class AddPeopleController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addPeople: AddPeople
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { firstName, lastName } = httpRequest.body
      await this.addPeople.add({
        firstName,
        lastName
      })

      return noContent()
    } catch (err) {
      return serverError(err)
    }
  }
}

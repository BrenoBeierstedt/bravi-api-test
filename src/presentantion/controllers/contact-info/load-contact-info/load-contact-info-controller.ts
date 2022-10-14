import { Controller, HttpRequest, HttpResponse, LoadContactInfo } from './load-contact-info-controller-protocols'
import { noContent, ok, serverError } from '../../../helpers/http-helper'

export class LoadContactInfoController implements Controller {
  constructor (private readonly loadContactInfo: LoadContactInfo) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const peoples = await this.loadContactInfo.load()
      return peoples.length ? ok(peoples) : noContent()
    } catch (err) {
      return serverError(err)
    }
  }
}

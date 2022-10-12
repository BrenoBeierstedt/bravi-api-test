import { HttpResponse } from '../protocols'

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null
})

export const badRequest = (data: any): HttpResponse => ({
  statusCode: 400,
  body: data
})

export const serverError = (data: any): HttpResponse => ({
  statusCode: 500,
  body: data
})

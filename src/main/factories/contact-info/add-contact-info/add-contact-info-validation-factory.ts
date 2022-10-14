import { ValidationComposite, RequiredFieldValidation } from '../../../../validation'
import { Validation } from '../../../../presentantion/protocols'

export const makeAddContactInfoValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['peopleId', 'type', 'info']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}

import { ValidationComposite, RequiredFieldValidation } from '../../../../validation'
import { Validation } from '../../../../presentantion/protocols'

export const makeUpdateContactValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['type', 'info']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}

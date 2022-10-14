import { ValidationComposite, RequiredFieldValidation } from '../../../../validation'
import { Validation } from '../../../../presentantion/protocols'

export const makeUpdatePeopleValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['firstName', 'lastName']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}

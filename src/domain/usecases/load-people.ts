import { PeopleModel } from '../models/people'
export interface LoadPeople {
  load: () => Promise<PeopleModel[]>
}

import { ContactInfoModel } from '../../../models/contact-info'
export interface LoadContactInfo {
  load: () => Promise<ContactInfoModel[]>
}

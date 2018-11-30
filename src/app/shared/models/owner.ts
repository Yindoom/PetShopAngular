import {Pet} from './pet';

export class Owner {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  birthdate?: Date;
  pets?: Pet[];
}

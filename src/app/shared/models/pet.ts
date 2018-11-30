import {Owner} from './owner';

export class Pet {
  id?: number;
  name: string;
  type: string;
  birthdate: Date;
  sellDate: Date;
  colour: string;
  previousOwner?: Owner;
  price: number;
}

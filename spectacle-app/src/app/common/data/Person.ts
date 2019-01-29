import { Address } from "src/app/common/data/Address";

export class Person {
    id : number ;
    firstName : string;
    lastName : string;
    email? : string;
    phoneNumber? : string;
    birthday? : string;
    address? : Address;
}
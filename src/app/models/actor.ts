export class Actor {
  id: number;
  firstName: string;
  lastName: string;
  films = [];

  constructor(id?: number, firstName?: string, lastName?: string, films?) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.films = films;
  }
}

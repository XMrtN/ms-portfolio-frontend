export class Person {

  id?: number;
  name: string;
  lastName: string;
  description: string;
  email: string;
  img: string;
  cv: string;

  constructor(name: string, lastName: string, description: string, email: string, img: string, cv: string){
    this.name = name;
    this.lastName = lastName;
    this.description = description;
    this.email = email;
    this.img = img;
    this.cv = cv;
  }

}

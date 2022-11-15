export class Person {

  id?: number
  name: string
  lastName: string
  img: string

  constructor(name: string, lastName: string, img: string){
    this.name = name
    this.lastName = lastName
    this.img = img
  }

}

export class Person {

  id: number
  name: string
  lastName: string
  description: string
  img: string

  constructor(name: string, lastName: string, description: string, img: string){
    this.name = name
    this.lastName = lastName
    this.description = description
    this.img = img
  }

}

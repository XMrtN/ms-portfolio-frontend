export class Education {

  id: number
  edInsTitle: string
  edCareerName: string
  edPeriod: string
  edDesc: string

  constructor(edInsTitle: string, edCareerName: string,  edPeriod: string, edDesc: string){
    this.edInsTitle = edInsTitle
    this.edCareerName = edCareerName
    this.edPeriod = edPeriod
    this.edDesc = edDesc
  }

}

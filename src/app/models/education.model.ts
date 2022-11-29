export class Education {

  id?: number;
  position: number;
  edInsTitle: string;
  edCareerName: string;
  edPeriod: string;
  edDesc: string;

  constructor(position: number, edInsTitle: string, edCareerName: string,  edPeriod: string, edDesc: string){
    this.position = position;
    this.edInsTitle = edInsTitle;
    this.edCareerName = edCareerName;
    this.edPeriod = edPeriod;
    this.edDesc = edDesc;
  }

}

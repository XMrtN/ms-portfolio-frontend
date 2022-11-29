export class Experience {

  id?: number;
  position: number;
  expCompName: string;
  expJobTitle: string;
  expPeriod: string;
  expDesc: string;

  constructor(position: number, expCompName: string, expJobTitle: string, expPeriod: string, expDesc: string){
    this.position = position;
    this.expCompName = expCompName;
    this.expJobTitle = expJobTitle;
    this.expPeriod = expPeriod;
    this.expDesc = expDesc;
  }

}

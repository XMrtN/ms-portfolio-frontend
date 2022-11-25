export class Experience {

  id?: number;
  expCompName: string;
  expJobTitle: string;
  expPeriod: string;
  expDesc: string;

  constructor(expCompName: string, expJobTitle: string, expPeriod: string, expDesc: string){
    this.expCompName = expCompName;
    this.expJobTitle = expJobTitle;
    this.expPeriod = expPeriod;
    this.expDesc = expDesc;
  }

}

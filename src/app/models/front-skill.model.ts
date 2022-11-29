export class FrontSkill {

  id?: number;
  position: number;
  name: string;
  percentage: number;

  constructor(position: number, name: string, percentage: number){
    this.position = position;
    this.name = name;
    this.percentage = percentage;
  }

}

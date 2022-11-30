export class Social {

  id?: number;
  position: number;
  icon: string;
  url: string;

  constructor(position: number, icon: string, url: string){
    this.position = position;
    this.icon = icon;
    this.url = url;
  }

}

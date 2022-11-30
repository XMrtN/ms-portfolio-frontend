export class Proyect {

  id?: number;
  position: number;
  title: string;
  subtitle: string;
  finishDate: string;
  description: string;
  img: string;
  url: string;
  
  constructor(position: number, title: string, subtitle: string,  finishDate: string, description: string, img: string, url: string){
    this.position = position;
    this.title = title;
    this.subtitle = subtitle;
    this.finishDate = finishDate;
    this.description = description;
    this.img = img;
    this.url = url;
  }

}

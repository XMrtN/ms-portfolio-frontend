export class Proyect {

  id?: number;
  title: string;
  subtitle: string;
  finishDate: string;
  description: string;
  img: string;
  url: string;
  
  constructor(title: string, subtitle: string,  finishDate: string, description: string, img: string, url: string){
    this.title = title;
    this.subtitle = subtitle;
    this.finishDate = finishDate;
    this.description = description;
    this.img = img;
    this.url = url;
  }

}

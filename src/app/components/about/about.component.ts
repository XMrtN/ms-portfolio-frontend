import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/experience.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  laboral: Experience[] = []
  education: Experience[] = []

  ngOnInit(): void {
    this.laboralExp()
    this.educationExp()
  }

  laboralExp(): void {
    this.laboral.push(new Experience(
      "Lorem",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti architecto fugit sequi at? Molestias ipsa quisquam, iste sapiente corporis aliquam delectus exercitationem esse dolorem ipsam? Eaque corrupti illo nostrum nesciunt?"
    ))
    
    this.laboral.push(new Experience(
      "Lorem",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti architecto fugit sequi at? Molestias ipsa quisquam, iste sapiente corporis aliquam delectus exercitationem esse dolorem ipsam? Eaque corrupti illo nostrum nesciunt?"
    ))
  }

  educationExp(): void {
    this.education.push(new Experience(
      "#SeProgramar",
      "La primera etapa de Argentina Programa donde se enseñan los fundamentos de la programación con JS y POO con Ruby"
    ))
    
    this.education.push(new Experience(
      "#YoProgramo",
      "La segunda etapa de Argentina Programa donde se profundiza en la programación web y se introducen lenguajes como Typescript, Angular, Spring Boot, MySQL entre otros"
    ))
    
    this.education.push(new Experience(
      "Licenciatura en Desarrollo de Software",
      "Carrera de 3 años en el Instituto de Formación y Educación Superior IFES."
    ))
  }

}

import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education.model';
import { Experience } from 'src/app/models/experience.model';
import { ExperienceService } from 'src/app/services/experience.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  experience: Experience[] = []
  education: Education[] = []

  isLoggedIn: boolean = false

  constructor(private experienceService: ExperienceService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.loadExp()
    // this.laboralExp()
    // this.educationExp()

    if(this.tokenService.getToken()) {
      this.isLoggedIn = true
    } else {
      this.isLoggedIn = false
    }
  }

  loadExp(): void {
    this.experienceService.list().subscribe(data => {
      this.experience = data
    })
  }

  // laboralExp(): void {
  //   this.laboral.push(new Experience(
  //     "Lorem",
  //     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti architecto fugit sequi at? Molestias ipsa quisquam, iste sapiente corporis aliquam delectus exercitationem esse dolorem ipsam? Eaque corrupti illo nostrum nesciunt?"
  //   ))
    
  //   this.laboral.push(new Experience(
  //     "Lorem",
  //     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti architecto fugit sequi at? Molestias ipsa quisquam, iste sapiente corporis aliquam delectus exercitationem esse dolorem ipsam? Eaque corrupti illo nostrum nesciunt?"
  //   ))
  // }

  // educationExp(): void {
  //   this.education.push(new Experience(
  //     "#SeProgramar",
  //     "La primera etapa de Argentina Programa donde se enseñan los fundamentos de la programación con JS y POO con Ruby"
  //   ))
    
  //   this.education.push(new Experience(
  //     "#YoProgramo",
  //     "La segunda etapa de Argentina Programa donde se profundiza en la programación web y se introducen lenguajes como Typescript, Angular, Spring Boot, MySQL entre otros"
  //   ))
    
  //   this.education.push(new Experience(
  //     "Licenciatura en Desarrollo de Software",
  //     "Carrera de 3 años en el Instituto de Formación y Educación Superior IFES."
  //   ))
  // }

}

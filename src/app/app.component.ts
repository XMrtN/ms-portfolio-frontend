import { Component } from '@angular/core';
import { Person } from './models/person.model';
import { PersonService } from './services/person.service';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  person: Person = null!;
  personEdit: Person = {
    id: 0,
    name: '',
    lastName: '',
    description: '',
    email: '',
    img: '',
    cv: ''
  };
  sections = [
    { id: "home", name: "inicio" },
    { id: "about", name: "acerca" },
    { id: "skills", name: "habilidades" },
    { id: "proyects", name: "proyectos" },
    { id: "contact", name: "contacto" },
  ];
  isLoaded: boolean = false;
  
  constructor(
    protected tokenService: TokenService,
    private personService: PersonService
  ) { }

  ngOnInit(): void {
    this.loadPerson();
    this.initAnimations();
  }
  
  loadPerson(): void {
    this.personService.detail(1).subscribe(data => {
      this.person = data;
      this.personEdit = data;
    });
  }

  initAnimations(): void {
    window.addEventListener("load", () => {
      document.querySelector(".wrapper")?.classList.add("fade");
      setTimeout(() => {this.isLoaded = true}, 2000);
    });
  }

}

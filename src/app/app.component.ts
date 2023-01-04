import { Component } from '@angular/core';
import { Colors } from './models/colors.model';
import { Person } from './models/person.model';
import { ColorsService } from './services/colors.service';
import { PersonService } from './services/person.service';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
  colors: Colors = null!;
  colorsEdit: Colors = {
    id: 0,
    firstColor: 0,
    secondColor: ''
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
    private personService: PersonService,
    private colorsService: ColorsService
  ) { }

  ngOnInit(): void {
    this.loadPerson();
    this.loadColors();
    this.initAnimations();
    document.documentElement.style.removeProperty("--bs-body-bg");
  }

  onDarkMode(value: string): void {
    value != ''?
    document.documentElement.className = value:
    document.documentElement.removeAttribute('class');
  }

  onChangeColor(color: string, value: any) {
    document.documentElement.style.setProperty(color, value);
  }
  
  loadPerson(): void {
    this.personService.detail(1).subscribe(data => {
      this.person = data;
      this.personEdit = data;
    });
  }

  loadColors(): void {
    this.colorsService.detail(1).subscribe(data => {
      this.colors = data;
      this.colorsEdit = data;
      this.onChangeColor("--hue-color", data.firstColor);
      this.onChangeColor("--second-color", data.secondColor);
      this.onChangeColor("--box-shadow-second-color", data.secondColor + 80);
    });
  }

  initAnimations(): void {
    window.addEventListener("load", () => {
      document.querySelector(".wrapper")?.classList.add("fade");
      setTimeout(() => {this.isLoaded = true}, 2000);
    });
  }

}

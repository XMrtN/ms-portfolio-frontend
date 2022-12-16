import { Component } from '@angular/core';
import { MainComponent } from './components/main/main.component';
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

  title = '';
  isLoaded: boolean = false;
  person: Person = null!;
  personId?: number;
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
  colorId?: number;
  colorsEdit: Colors = {
    id: 0,
    firstColor: '',
    secondColor: ''
  };
  sections = [
    { id: "home", name: "inicio" },
    { id: "about", name: "acerca" },
    { id: "skills", name: "habilidades" },
    { id: "proyects", name: "proyectos" },
    { id: "contact", name: "contacto" },
  ];

  constructor(
    protected tokenService: TokenService,
    private personService: PersonService,
    private colorsService: ColorsService
  ) { }

  ngOnInit(): void {
    this.loadPerson();
    this.loadColors();
    this.initAnimations();
  }

  onDarkMode(value: string): void {
    document.documentElement.className = value;
  }

  onChangeColor(color: string, value: any) {
    document.documentElement.style.setProperty(color, value)
  }

  onPersonClean(): void {
    this.personEdit.name = '',
    this.personEdit.lastName = '',
    this.personEdit.description = '',
    this.personEdit.email = '',
    this.personEdit.img = '',
    this.personEdit.cv = ''
  }

  onColorClean(): void {
    this.colorsEdit.firstColor = '',
    this.colorsEdit.secondColor = ''
  }
  
  loadPerson(): void {
    this.personService.detail(1).subscribe(data => {
      this.person = data;
    });
  }

  loadColors(): void {
    this.colorsService.detail(1).subscribe(data => {
      this.colors = data;
      this.colorId = data.id;
      this.onChangeColor("--hue-color", data.firstColor);
      this.onChangeColor("--hue-second-color", data.secondColor);
    });
  }
  
  onPersonDetail(): void {
    this.personService.detail(this.personId!).subscribe(data => {
      this.personEdit = data;
    }, err => {
      alert("No se pudieron cargar los datos");
    });
  }
  
  onColorDetail(): void {
    this.colorsService.detail(this.colorId!).subscribe(data => {
      this.colorsEdit = data;
    }, err => {
      alert("No se pudieron cargar los datos");
    });
  }

  initAnimations(): void {
    window.addEventListener("load", () => {
      document.querySelector(".wrapper")?.classList.add("fade");
      setTimeout(() => {this.isLoaded = true}, 2000);
    });
  }

}

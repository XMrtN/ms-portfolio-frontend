import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  person: Person = null!;
  id?: number;
  personEdit: Person = {
    id: 0,
    name: '',
    lastName: '',
    description: '',
    email: '',
    img: '',
    cv: ''
  };

  constructor(
    private personService: PersonService,
    protected tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.loadPerson();
  }

  onClean(): void {
    this.personEdit.name = '',
    this.personEdit.lastName = '',
    this.personEdit.description = '',
    this.personEdit.email = '',
    this.personEdit.img = '',
    this.personEdit.cv = ''
  }

  loadPerson(): void {
    this.personService.detail(1).subscribe(data => {
      this.person = data;
    });
  }

  onDetail(): void {
    this.personService.detail(this.id!).subscribe(data => {
      this.personEdit = data;
    }, err => {
      alert("No se pudieron cargar los datos");
    });
  }

}

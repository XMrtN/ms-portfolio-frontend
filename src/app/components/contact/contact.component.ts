import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  person: Person = {
    id: 0,
    name: '',
    lastName: '',
    description: '',
    email: '',
    img: '',
    cv: ''
  };
  environment = environment.url;

  constructor(protected personService: PersonService) { }

  ngOnInit(): void {
    this.personService.detail(1).subscribe(data => {
      this.person = data;
    });
  }

}

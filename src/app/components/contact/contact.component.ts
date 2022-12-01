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
  name?: string;
  email?: string;
  subject?: string;
  desc?: string;

  constructor(protected personService: PersonService) { }

  ngOnInit(): void {
    this.personService.detail(1).subscribe(data => {
      this.person = data;
    });
  }

  onMailTo(): void {
    window.location.href = `mailto:${this.person.email}?subject=${this.subject}&body=Nombre%3A${this.name}%0ACorreo%3A${this.email}%0AMensaje%3A${this.desc}%0A`;
  }

}

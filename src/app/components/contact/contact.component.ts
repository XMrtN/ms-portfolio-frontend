import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name?: string;
  email?: string;
  subject?: string;
  desc?: string;

  constructor(
    protected personService: PersonService,
    protected mainComponent: MainComponent
  ) { }

  ngOnInit(): void {
  }

  onMailTo(): void {
    window.location.href = `mailto:${this.mainComponent.person.email}?subject=${this.subject}&body=Nombre%3A%20${this.name}%0ACorreo%3A%20${this.email}%0AMensaje%3A%20${this.desc}%0A`;
  }

}

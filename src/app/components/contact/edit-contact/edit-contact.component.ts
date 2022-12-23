import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  constructor(
    private personService: PersonService,
    protected appComponent: AppComponent
  ) { }

  ngOnInit(): void {
  }

  onUpdate(): void {
    this.personService.updateEmail(
      this.appComponent.person.id!,
      this.appComponent.personEdit
    ).subscribe(data => {
      this.appComponent.loadPerson();
    }, err => {
      this.appComponent.loadPerson();
      alert("No se pudo modificar");
    });
  }

}

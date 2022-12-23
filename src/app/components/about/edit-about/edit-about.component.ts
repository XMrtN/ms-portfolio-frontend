import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {

  constructor(
    private personService: PersonService,
    protected appComponent: AppComponent
  ) { }

  ngOnInit(): void {
  }

  onUpdate(): void {
    this.personService.updateDesc(
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

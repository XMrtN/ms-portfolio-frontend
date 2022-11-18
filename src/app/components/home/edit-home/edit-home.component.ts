import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';
import { HomeComponent } from '../home.component';

@Component({
  selector: 'app-edit-home',
  templateUrl: './edit-home.component.html',
  styleUrls: ['./edit-home.component.css']
})
export class EditHomeComponent implements OnInit {

  person: Person = null

  constructor(
    private personService: PersonService,
    private activatedRoute: ActivatedRoute,
    private homeComponent: HomeComponent
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id']
    this.personService.detail(id).subscribe(data => {
      this.person = data
    }, err => {
      alert("No se pudo modificar")
    })
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id']
    this.personService.update(id, this.person).subscribe(data => {
      this.homeComponent.loadPerson()
    }, err => {
      alert("No se pudo modificar")
    })
  }

}

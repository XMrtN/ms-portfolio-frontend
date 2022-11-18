import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';
import { AboutComponent } from '../about.component';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {

  person: Person = null

  constructor(
    private personService: PersonService,
    private activatedRoute: ActivatedRoute,
    private aboutComponent: AboutComponent
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
      this.aboutComponent.loadPerson()
    }, err => {
      alert("No se pudo modificar")
    })
  }

  uploadImage($event: any) {

  }

}

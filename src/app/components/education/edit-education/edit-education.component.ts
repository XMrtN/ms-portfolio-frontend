import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education.model';
import { EducationService } from 'src/app/services/education.service';
import { EducationComponent } from '../education.component';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit {

  ed: Education = {
    id: 0,
    edName: "",
    edDesc: ""
  }

  constructor(
    private educationService: EducationService,
    private educationComponent: EducationComponent
  ) { }

  ngOnInit(): void {
  }

  onDetail(): void {
    this.educationService.detail(this.educationComponent.id).subscribe(data => {
      this.ed = data
    }, err => {
      alert("No se pudieron cargar los datos")
    })
  }

  onUpdate(): void {
    // this.onDetail()
    this.educationService.update(this.educationComponent.id, this.ed).subscribe(data => {
      this.educationComponent.loadEd()
    }, err => {
      alert("No se pudo modificar")
    })
  }

}

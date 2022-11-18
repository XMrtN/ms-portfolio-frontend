import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Education } from 'src/app/models/education.model';
import { EducationService } from 'src/app/services/education.service';
import { EducationComponent } from '../education.component';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit {

  edu: Education = null

  constructor(
    private educationService: EducationService,
    private activatedRoute: ActivatedRoute,
    private educationComponenet: EducationComponent
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id']
    this.educationService.detail(id).subscribe(data => {
      this.edu = data
    }, err => {
      alert("No se pudo modificar")
    })
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id']
    this.educationService.update(id, this.edu).subscribe(data => {
      this.educationComponenet.loadEd()
    }, err => {
      alert("No se pudo modificar")
    })
  }

}

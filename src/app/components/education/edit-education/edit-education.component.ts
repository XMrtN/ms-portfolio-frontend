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

  constructor(
    private educationService: EducationService,
    protected educationComponent: EducationComponent
  ) { }

  ngOnInit(): void {
  }

  onUpdate(): void {
    this.educationService.update(this.educationComponent.id!, this.educationComponent.ed).subscribe(data => {
      this.educationComponent.loadEd();
    }, err => {
      alert("No se pudo modificar");
    })
  }

}

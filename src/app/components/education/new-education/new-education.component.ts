import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education.model';
import { EducationService } from 'src/app/services/education.service';
import { EducationComponent } from '../education.component';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css']
})
export class NewEducationComponent implements OnInit {

  constructor(
    private educationService: EducationService,
    protected educationComponent: EducationComponent
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const ed = new Education(
      this.educationComponent.ed.position,
      this.educationComponent.ed.edInsTitle,
      this.educationComponent.ed.edCareerName,
      this.educationComponent.ed.edPeriod,
      this.educationComponent.ed.edDesc
    );
    this.educationService.save(ed).subscribe(data => {
      this.educationComponent.loadEd();
    }, err => {
      alert("No se pudo agregar");
    });
    this.educationComponent.onClean();
  }

}

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

  edInsTitle: string
  edCareerName: string
  edPeriod: string
  edDesc: string

  constructor(
    private educationService: EducationService,
    private educationComponenet: EducationComponent
  ) { }

  ngOnInit(): void {
  }

  onClean(): void {
    this.edInsTitle = ''
    this.edCareerName = ''
    this.edPeriod = ''
    this.edDesc = ''
  }

  onCreate(): void {
    const ed = new Education(this.edInsTitle, this.edCareerName, this.edPeriod, this.edDesc)
    this.educationService.save(ed).subscribe(data => {
      this.educationComponenet.loadEd()
    }, err => {
      alert("No se pudo agregar")
    })
    this.onClean()
  }

}

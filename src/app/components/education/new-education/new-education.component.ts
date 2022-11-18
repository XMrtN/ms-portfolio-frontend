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

  edName: string
  edDesc: string

  constructor(
    private educationService: EducationService,
    private educationComponenet: EducationComponent
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const ed = new Education(this.edName, this.edDesc)
    this.educationService.save(ed).subscribe(data => {
      this.educationComponenet.loadEd()
    }, err => {
      alert("No se pudo agregar")
    })
  }

}

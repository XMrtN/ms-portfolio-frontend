import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education.model';
import { EducationService } from 'src/app/services/education.service';
import { TokenService } from 'src/app/services/token.service';
// import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  
  education: Education[] = [];
  id?: number;
  ed: Education = {
    id: 0,
    edInsTitle: '',
    edCareerName: '',
    edPeriod: '',
    edDesc: ''
  };

  constructor(
    private educationService: EducationService,
    protected tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.loadEd();
  }

  // onDropped(event: CdkDragDrop<any>): void {
  //   moveItemInArray(this.education, event.previousIndex, event.currentIndex)
  // }

  loadEd(): void {
    this.educationService.list().subscribe(data => {
      this.education = data;
    });
  }

  onDetail(): void {
    this.educationService.detail(this.id!).subscribe(data => {
      this.ed = data;
    }, err => {
      alert("No se pudieron cargar los datos");
    });
  }

  delete(id: number): void {
    if(id != undefined) {
      this.educationService.delete(id).subscribe(data => {
        this.loadEd();
      }, err => {
        alert("No se pudo eliminar");
      });
    }
  }

}

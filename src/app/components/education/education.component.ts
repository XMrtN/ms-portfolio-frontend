import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education.model';
import { EducationService } from 'src/app/services/education.service';
import { TokenService } from 'src/app/services/token.service';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss', '../about/about.component.scss']
})
export class EducationComponent implements OnInit {

  id?: number;
  ed: Education = {
    id: 0,
    position: 1000,
    edInsTitle: '',
    edCareerName: '',
    edPeriod: '',
    edDesc: ''
  };

  constructor(
    private educationService: EducationService,
    protected tokenService: TokenService,
    protected aboutComponent: AboutComponent
  ) { }

  ngOnInit(): void {
    this.loadEd();
  }

  onClean(): void {
    this.ed.position = 1000,
    this.ed.edInsTitle = '';
    this.ed.edCareerName = '';
    this.ed.edPeriod = '';
    this.ed.edDesc = '';
  }

  onDropped(event: CdkDragDrop<any>): void {
    moveItemInArray(this.aboutComponent.education, event.previousIndex, event.currentIndex);
    this.aboutComponent.education.forEach(edu => {
      edu.position = this.aboutComponent.education.indexOf(edu);
      this.educationService.updatePos(edu.id!, edu).subscribe(data => {
      }, err => {
        alert("No se pudo modificar la posición");
      });
    });
  }

  loadEd(): void {
    this.educationService.list().subscribe(data => {
      this.aboutComponent.education = data;
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

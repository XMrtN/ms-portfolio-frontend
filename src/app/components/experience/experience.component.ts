import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/experience.model';
import { ExperienceService } from 'src/app/services/experience.service';
import { TokenService } from 'src/app/services/token.service';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss', '../about/about.component.scss']
})
export class ExperienceComponent implements OnInit {

  id?: number;
  exp: Experience = {
    id: 0,
    position: 1000,
    expCompName: '',
    expJobTitle: '',
    expPeriod: '',
    expDesc: ''
  };

  constructor(
    private experienceService: ExperienceService,
    protected tokenService: TokenService,
    protected aboutComponent: AboutComponent
  ) { }

  ngOnInit(): void {
    this.loadExp();
  }

  onClean(): void {
    this.exp.position = 1000,
    this.exp.expCompName = '';
    this.exp.expJobTitle = '';
    this.exp.expPeriod = '';
    this.exp.expDesc = '';
  }

  onDropped(event: CdkDragDrop<any>): void {
    moveItemInArray(this.aboutComponent.experience, event.previousIndex, event.currentIndex);
    this.aboutComponent.experience.forEach(expe => {
      expe.position = this.aboutComponent.experience.indexOf(expe);
      this.experienceService.updatePos(expe.id!, expe).subscribe(data => {
      }, err => {
        alert("No se pudo modificar la posición");
      });
    });
  }

  loadExp(): void {
    this.experienceService.list().subscribe(data => {
      this.aboutComponent.experience = data;
    });
  }

  onDetail(): void {
    this.experienceService.detail(this.id!).subscribe(data => {
      this.exp = data;
    }, err => {
      alert("No se pudieron cargar los datos");
    });
  }

  delete(id: number): void {
    if(id != undefined) {
      this.experienceService.delete(id).subscribe(data => {
        this.loadExp();
      }, err => {
        alert("No se pudo eliminar");
      });
    }
  }

}

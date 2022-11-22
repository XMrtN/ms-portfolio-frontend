import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/experience.model';
import { ExperienceService } from 'src/app/services/experience.service';
import { ExperienceComponent } from '../experience.component';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {

  expLab: Experience = {
    id: 0,
    expName: "",
    expDesc: ""
  }

  constructor(
    private experienceService: ExperienceService,
    private experienceComponent: ExperienceComponent
  ) { }

  ngOnInit(): void {
  }

  onDetail(): void {
    this.experienceService.detail(this.experienceComponent.id).subscribe(data => {
      this.expLab = data
    }, err => {
      alert("No se pudieron cargar los datos")
    })
  }

  onUpdate(): void {
    // this.onDetail()
    this.experienceService.update(this.experienceComponent.id, this.expLab).subscribe(data => {
      this.experienceComponent.loadExp()
    }, err => {
      alert("No se pudo modificar")
    })
  }

}

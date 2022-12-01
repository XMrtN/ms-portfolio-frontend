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

  constructor(
    private experienceService: ExperienceService,
    protected experienceComponent: ExperienceComponent
  ) { }

  ngOnInit(): void {
  }

  onUpdate(): void {
    this.experienceService.update(
      this.experienceComponent.id!,
      this.experienceComponent.exp
    ).subscribe(data => {
      this.experienceComponent.loadExp();
    }, err => {
      alert("No se pudo modificar");
    });
    this.experienceComponent.onClean();
  }

}

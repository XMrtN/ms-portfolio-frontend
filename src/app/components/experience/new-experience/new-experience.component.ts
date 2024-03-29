import { Component, Input, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/experience.model';
import { ExperienceService } from 'src/app/services/experience.service';
import { ExperienceComponent } from '../experience.component';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.scss']
})
export class NewExperienceComponent implements OnInit {
  
  constructor(
    private experienceService: ExperienceService,
    protected experienceComponent: ExperienceComponent
  ) { }
  
  ngOnInit(): void {
  }

  onCreate(): void {
    const exp = new Experience(
      this.experienceComponent.exp.position,
      this.experienceComponent.exp.expCompName,
      this.experienceComponent.exp.expJobTitle,
      this.experienceComponent.exp.expPeriod,
      this.experienceComponent.exp.expDesc
    );
    this.experienceService.save(exp).subscribe(data => {
      this.experienceComponent.loadExp();
    }, err => {
      alert("No se pudo agregar");
    });
    this.experienceComponent.onClean();
  }

}

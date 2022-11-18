import { Component, Input, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/experience.model';
import { ExperienceService } from 'src/app/services/experience.service';
import { ExperienceComponent } from '../experience.component';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css']
})
export class NewExperienceComponent implements OnInit {

  expName: string
  expDesc: string
  
  constructor(
    private experienceService: ExperienceService,
    private experienceComponent: ExperienceComponent
  ) { }
  
  ngOnInit(): void {
  }

  onCreate(): void {
    const exp = new Experience(this.expName, this.expDesc)
    this.experienceService.save(exp).subscribe(data => {
      this.experienceComponent.loadExp()
    }, err => {
      alert("No se pudo agregar")
    })
  }

}

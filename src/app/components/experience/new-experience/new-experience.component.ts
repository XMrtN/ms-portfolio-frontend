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

  expCompName?: string;
  expJobTitle?: string;
  expPeriod?: string;
  expDesc?: string;
  
  constructor(
    private experienceService: ExperienceService,
    private experienceComponent: ExperienceComponent
  ) { }
  
  ngOnInit(): void {
  }

  onClean(): void {
    this.expCompName = '';
    this.expJobTitle = '';
    this.expPeriod = '';
    this.expDesc = '';
  }

  onCreate(): void {
    const exp = new Experience(this.expCompName!, this.expJobTitle!, this.expPeriod!, this.expDesc!);
    this.experienceService.save(exp).subscribe(data => {
      this.experienceComponent.loadExp();
    }, err => {
      alert("No se pudo agregar");
    })
    this.onClean();
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Experience } from 'src/app/models/experience.model';
import { ExperienceService } from 'src/app/services/experience.service';
import { ExperienceComponent } from '../experience.component';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {

  expLab: Experience = null

  constructor(
    private experienceService: ExperienceService,
    private activatedRoute: ActivatedRoute,
    private experienceComponent: ExperienceComponent
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id']
    this.experienceService.detail(id).subscribe(data => {
      this.expLab = data
    }, err => {
      alert("No se pudo modificar")
    })
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id']
    this.experienceService.update(id, this.expLab).subscribe(data => {
      this.experienceComponent.loadExp()
    }, err => {
      alert("No se pudo modificar")
    })
  }

}

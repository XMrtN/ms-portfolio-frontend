import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Skill } from 'src/app/models/skill.model';
import { FrontSkillService } from 'src/app/services/front-skill.service';
import { FrontSkillComponent } from '../front-skill.component';

@Component({
  selector: 'app-edit-front-skill',
  templateUrl: './edit-front-skill.component.html',
  styleUrls: ['./edit-front-skill.component.css']
})
export class EditFrontSkillComponent implements OnInit {

  frontSkill: Skill = null

  constructor(
    private frontskillService: FrontSkillService,
    private activatedRoute: ActivatedRoute,
    private frontSkillComponent: FrontSkillComponent
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id']
    this.frontskillService.detail(id).subscribe(data => {
      this.frontSkill = data
    }, err => {
      alert("No se pudo modificar")
    })
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id']
    this.frontskillService.update(id, this.frontSkill).subscribe((data) => {
      this.frontSkillComponent.loadSkill()
    }, err => {
      alert("No se pudo modificar")
    })
  }

}

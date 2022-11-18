import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill.model';
import { FrontSkillService } from 'src/app/services/front-skill.service';
import { FrontSkillComponent } from '../front-skill.component';

@Component({
  selector: 'app-new-front-skill',
  templateUrl: './new-front-skill.component.html',
  styleUrls: ['./new-front-skill.component.css']
})
export class NewFrontSkillComponent implements OnInit {

  skillName: string
  skillPercentage: number

  constructor(
    private frontskillService: FrontSkillService,
    private frontSkillComponent: FrontSkillComponent
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skill = new Skill(this.skillName, this.skillPercentage)
    this.frontskillService.save(skill).subscribe(data => {
      this.frontSkillComponent.loadSkill()
    }, err => {
      alert("No se pudo agregar")
    })
  }

}

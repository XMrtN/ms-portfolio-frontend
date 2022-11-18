import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill.model';
import { SoftSkillService } from 'src/app/services/soft-skill.service';
import { SoftSkillComponent } from '../soft-skill.component';

@Component({
  selector: 'app-new-soft-skill',
  templateUrl: './new-soft-skill.component.html',
  styleUrls: ['./new-soft-skill.component.css']
})
export class NewSoftSkillComponent implements OnInit {

  skillName: string
  skillPercentage: number

  constructor(
    private softskillService: SoftSkillService,
    private softSkillComponent: SoftSkillComponent
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skill = new Skill(this.skillName, this.skillPercentage)
    this.softskillService.save(skill).subscribe(data => {
      this.softSkillComponent.loadSkill()
    }, err => {
      alert("No se pudo agregar")
    })
  }

}

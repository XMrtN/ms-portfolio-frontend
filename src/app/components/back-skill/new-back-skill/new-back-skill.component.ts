import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill.model';
import { BackSkillService } from 'src/app/services/back-skill.service';
import { BackSkillComponent } from '../back-skill.component';

@Component({
  selector: 'app-new-back-skill',
  templateUrl: './new-back-skill.component.html',
  styleUrls: ['./new-back-skill.component.css']
})
export class NewBackSkillComponent implements OnInit {
  
  skillName: string
  skillPercentage: number

  constructor(
    private backskillService: BackSkillService,
    private backSkillComponent: BackSkillComponent
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skill = new Skill(this.skillName, this.skillPercentage)
    this.backskillService.save(skill).subscribe(data => {
      this.backSkillComponent.loadSkill()
    }, err => {
      alert("No se pudo agregar")
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FrontSkill } from 'src/app/models/front-skill.model';
import { FrontSkillService } from 'src/app/services/front-skill.service';
import { FrontSkillComponent } from '../front-skill.component';

@Component({
  selector: 'app-new-front-skill',
  templateUrl: './new-front-skill.component.html',
  styleUrls: ['./new-front-skill.component.css']
})
export class NewFrontSkillComponent implements OnInit {

  frontskillName: string
  frontskillPercentage: number

  constructor(
    private frontskillService: FrontSkillService,
    private frontSkillComponent: FrontSkillComponent
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const frontskill = new FrontSkill(this.frontskillName, this.frontskillPercentage)
    this.frontskillService.save(frontskill).subscribe(data => {
      this.frontSkillComponent.loadSkill()
    }, err => {
      alert("No se pudo agregar")
    })
  }

}

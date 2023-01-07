import { Component, OnInit } from '@angular/core';
import { FrontSkill } from 'src/app/models/front-skill.model';
import { FrontSkillService } from 'src/app/services/front-skill.service';
import { FrontSkillComponent } from '../front-skill.component';

@Component({
  selector: 'app-new-front-skill',
  templateUrl: './new-front-skill.component.html',
  styleUrls: ['./new-front-skill.component.scss']
})
export class NewFrontSkillComponent implements OnInit {

  constructor(
    private frontskillService: FrontSkillService,
    protected frontSkillComponent: FrontSkillComponent
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const frontskill = new FrontSkill(
      this.frontSkillComponent.frontSkill.position,
      this.frontSkillComponent.frontSkill.name,
      this.frontSkillComponent.frontSkill.percentage
    );
    this.frontskillService.save(frontskill).subscribe(data => {
      this.frontSkillComponent.loadSkill();
    }, err => {
      alert("No se pudo agregar");
    });
    this.frontSkillComponent.onClean();
  }

}

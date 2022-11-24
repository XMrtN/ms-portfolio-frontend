import { Component, OnInit } from '@angular/core';
import { FrontSkill } from 'src/app/models/front-skill.model';
import { FrontSkillService } from 'src/app/services/front-skill.service';
import { FrontSkillComponent } from '../front-skill.component';

@Component({
  selector: 'app-edit-front-skill',
  templateUrl: './edit-front-skill.component.html',
  styleUrls: ['./edit-front-skill.component.css']
})
export class EditFrontSkillComponent implements OnInit {

  constructor(
    private frontskillService: FrontSkillService,
    protected frontSkillComponent: FrontSkillComponent
  ) { }

  ngOnInit(): void {
  }

  onUpdate(): void {
    this.frontskillService.update(this.frontSkillComponent.id, this.frontSkillComponent.frontSkill).subscribe((data) => {
      this.frontSkillComponent.loadSkill()
    }, err => {
      alert("No se pudo modificar")
    })
  }

}

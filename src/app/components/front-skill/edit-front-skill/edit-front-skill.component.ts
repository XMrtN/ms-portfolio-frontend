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

  frontSkill: FrontSkill = {
    id: 0,
    name: "",
    percentage: 50
  }

  constructor(
    private frontskillService: FrontSkillService,
    private frontSkillComponent: FrontSkillComponent
  ) { }

  ngOnInit(): void {
  }

  onDetail(): void {
    this.frontskillService.detail(this.frontSkillComponent.id).subscribe(data => {
      this.frontSkill = data
    }, err => {
      alert("No se pudieron cargar los datos")
    })
  }

  onUpdate(): void {
    this.frontskillService.update(this.frontSkillComponent.id, this.frontSkill).subscribe((data) => {
      this.frontSkillComponent.loadSkill()
    }, err => {
      alert("No se pudo modificar")
    })
  }

}

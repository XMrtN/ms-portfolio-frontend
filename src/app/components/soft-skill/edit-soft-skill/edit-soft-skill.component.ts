import { Component, OnInit } from '@angular/core';
import { SoftSkill } from 'src/app/models/soft-skill.model';
import { SoftSkillService } from 'src/app/services/soft-skill.service';
import { SoftSkillComponent } from '../soft-skill.component';

@Component({
  selector: 'app-edit-soft-skill',
  templateUrl: './edit-soft-skill.component.html',
  styleUrls: ['./edit-soft-skill.component.css']
})
export class EditSoftSkillComponent implements OnInit {

  softSkill: SoftSkill = {
    id: 0,
    name: "",
    percentage: 50
  }

  constructor(
    private softskillService: SoftSkillService,
    private softSkillComponent: SoftSkillComponent
  ) { }

  ngOnInit(): void {
  }

  onDetail(): void {
    this.softskillService.detail(this.softSkillComponent.id).subscribe(data => {
      this.softSkill = data
    }, err => {
      alert("No se pudieron cargar los datos")
    })
  }

  onUpdate(): void {
    this.softskillService.update(this.softSkillComponent.id, this.softSkill).subscribe(data => {
      this.softSkillComponent.loadSkill()
    }, err => {
      alert("No se pudo modificar")
    })
  }

}

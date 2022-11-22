import { Component, OnInit } from '@angular/core';
import { BackSkill } from 'src/app/models/back-skill.model';
import { BackSkillService } from 'src/app/services/back-skill.service';
import { BackSkillComponent } from '../back-skill.component';

@Component({
  selector: 'app-edit-back-skill',
  templateUrl: './edit-back-skill.component.html',
  styleUrls: ['./edit-back-skill.component.css']
})
export class EditBackSkillComponent implements OnInit {

  backSkill: BackSkill = {
    id: 0,
    name: "",
    percentage: 50
  }

  constructor(
    private backskillService: BackSkillService,
    private backSkillComponent: BackSkillComponent
  ) { }

  ngOnInit(): void {
  }

  onDetail(): void {
    this.backskillService.detail(this.backSkillComponent.id).subscribe(data => {
      this.backSkill = data
    }, err => {
      alert("No se pudieron cargar los datos")
    })
  }

  onUpdate(): void {
    // this.onDetail()
    this.backskillService.update(this.backSkillComponent.id, this.backSkill).subscribe(data => {
      this.backSkillComponent.loadSkill()
    }, err => {
      alert("No se pudo modificar")
    })
  }

}

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

  constructor(
    private softskillService: SoftSkillService,
    protected softSkillComponent: SoftSkillComponent
  ) { }

  ngOnInit(): void {
  }

  onUpdate(): void {
    this.softskillService.update(this.softSkillComponent.id, this.softSkillComponent.softSkill).subscribe(data => {
      this.softSkillComponent.loadSkill()
    }, err => {
      alert("No se pudo modificar")
    })
  }

}

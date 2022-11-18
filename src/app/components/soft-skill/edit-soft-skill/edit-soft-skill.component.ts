import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Skill } from 'src/app/models/skill.model';
import { SoftSkillService } from 'src/app/services/soft-skill.service';
import { SoftSkillComponent } from '../soft-skill.component';

@Component({
  selector: 'app-edit-soft-skill',
  templateUrl: './edit-soft-skill.component.html',
  styleUrls: ['./edit-soft-skill.component.css']
})
export class EditSoftSkillComponent implements OnInit {

  softSkill: Skill = null

  constructor(
    private softskillService: SoftSkillService,
    private activatedRoute: ActivatedRoute,
    private softSkillComponent: SoftSkillComponent
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id']
    this.softskillService.detail(id).subscribe(data => {
      this.softSkill = data
    }, err => {
      alert("No se pudo modificar")
    })
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id']
    this.softskillService.update(id, this.softSkill).subscribe(data => {
      this.softSkillComponent.loadSkill()
    }, err => {
      alert("No se pudo modificar")
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Skill } from 'src/app/models/skill.model';
import { BackSkillService } from 'src/app/services/back-skill.service';
import { BackSkillComponent } from '../back-skill.component';

@Component({
  selector: 'app-edit-back-skill',
  templateUrl: './edit-back-skill.component.html',
  styleUrls: ['./edit-back-skill.component.css']
})
export class EditBackSkillComponent implements OnInit {

  backSkill: Skill = null

  constructor(
    private backskillService: BackSkillService,
    private activatedRoute: ActivatedRoute,
    private backSkillComponent: BackSkillComponent
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id']
    this.backskillService.detail(id).subscribe(data => {
      this.backSkill = data
    }, err => {
      alert("No se pudo modificar")
    })
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id']
    this.backskillService.update(id, this.backSkill).subscribe(data => {
      this.backSkillComponent.loadSkill()
    }, err => {
      alert("No se pudo modificar")
    })
  }

}

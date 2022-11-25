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

  constructor(
    private backskillService: BackSkillService,
    protected backSkillComponent: BackSkillComponent
  ) { }

  ngOnInit(): void {
  }

  onUpdate(): void {
    this.backskillService.update(this.backSkillComponent.id!, this.backSkillComponent.backSkill).subscribe(data => {
      this.backSkillComponent.loadSkill();
    }, err => {
      alert("No se pudo modificar");
    })
  }

}

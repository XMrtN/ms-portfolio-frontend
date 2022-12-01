import { Component, OnInit } from '@angular/core';
import { BackSkill } from 'src/app/models/back-skill.model';
import { BackSkillService } from 'src/app/services/back-skill.service';
import { BackSkillComponent } from '../back-skill.component';

@Component({
  selector: 'app-new-back-skill',
  templateUrl: './new-back-skill.component.html',
  styleUrls: ['./new-back-skill.component.css']
})
export class NewBackSkillComponent implements OnInit {
  
  constructor(
    private backskillService: BackSkillService,
    protected backSkillComponent: BackSkillComponent
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const backskill = new BackSkill(
      this.backSkillComponent.backSkill.position,
      this.backSkillComponent.backSkill.name,
      this.backSkillComponent.backSkill.percentage
    );
    this.backskillService.save(backskill).subscribe(data => {
      this.backSkillComponent.loadSkill();
    }, err => {
      alert("No se pudo agregar");
    });
    this.backSkillComponent.onClean();
  }

}

import { Component, OnInit } from '@angular/core';
import { SoftSkill } from 'src/app/models/soft-skill.model';
import { SoftSkillService } from 'src/app/services/soft-skill.service';
import { SoftSkillComponent } from '../soft-skill.component';

@Component({
  selector: 'app-new-soft-skill',
  templateUrl: './new-soft-skill.component.html',
  styleUrls: ['./new-soft-skill.component.css']
})
export class NewSoftSkillComponent implements OnInit {

  constructor(
    private softskillService: SoftSkillService,
    protected softSkillComponent: SoftSkillComponent
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const softskill = new SoftSkill(
      this.softSkillComponent.softSkill.position, 
      this.softSkillComponent.softSkill.name, 
      this.softSkillComponent.softSkill.percentage
    );
    this.softskillService.save(softskill).subscribe(data => {
      this.softSkillComponent.loadSkill();
    }, err => {
      alert("No se pudo agregar");
    });
    this.softSkillComponent.onClean();
  }

}

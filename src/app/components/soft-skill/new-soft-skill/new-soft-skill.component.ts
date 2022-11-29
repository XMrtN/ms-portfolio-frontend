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

  position?: number;
  softskillName?: string;
  softskillPercentage: number = 50;

  constructor(
    private softskillService: SoftSkillService,
    private softSkillComponent: SoftSkillComponent
  ) { }

  ngOnInit(): void {
  }

  onClean(): void {
    this.softskillName = '';
    this.softskillPercentage = 50;
  }

  onCreate(): void {
    const softskill = new SoftSkill(this.position!, this.softskillName!, this.softskillPercentage);
    this.softskillService.save(softskill).subscribe(data => {
      this.softSkillComponent.loadSkill();
    }, err => {
      alert("No se pudo agregar");
    });
    this.onClean();
  }

}

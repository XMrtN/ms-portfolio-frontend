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
  
  backskillName: string
  backskillPercentage: number

  constructor(
    private backskillService: BackSkillService,
    private backSkillComponent: BackSkillComponent
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const backskill = new BackSkill(this.backskillName, this.backskillPercentage)
    this.backskillService.save(backskill).subscribe(data => {
      this.backSkillComponent.loadSkill()
    }, err => {
      alert("No se pudo agregar")
    })
  }

}

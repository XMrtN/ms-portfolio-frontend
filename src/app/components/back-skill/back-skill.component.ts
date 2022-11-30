import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { BackSkill } from 'src/app/models/back-skill.model';
import { BackSkillService } from 'src/app/services/back-skill.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-back-skill',
  templateUrl: './back-skill.component.html',
  styleUrls: ['./back-skill.component.css', '../skills/skills.component.css']
})
export class BackSkillComponent implements OnInit {

  backEnd: BackSkill[] = [];
  id?: number;
  backSkill: BackSkill = {
    id: 0,
    position: 0,
    name: '',
    percentage: 50
  };

  constructor(
    private backskillService: BackSkillService,
    protected tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.loadSkill();
  }

  onDropped(event: CdkDragDrop<any>): void {
    moveItemInArray(this.backEnd, event.previousIndex, event.currentIndex);
    this.backEnd.forEach(back => {
      back.position = this.backEnd.indexOf(back);
      this.backskillService.updatePos(back.id!, back).subscribe(data => {
      }, err => {
        alert("No se pudo modificar la posición");
      });
    });
  }

  loadSkill(): void {
    this.backskillService.list().subscribe(data => {
      this.backEnd = data;
    });
  }

  onDetail(): void {
    this.backskillService.detail(this.id!).subscribe(data => {
      this.backSkill = data;
    }, err => {
      alert("No se pudieron cargar los datos");
    });
  }

  delete(id: number): void {
    if(id != undefined) {
      this.backskillService.delete(id).subscribe(data => {
        this.loadSkill();
      }, err => {
        alert("No se pudo eliminar");
      });
    }
  }

}

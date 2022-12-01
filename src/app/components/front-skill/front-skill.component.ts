import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FrontSkill } from 'src/app/models/front-skill.model';
import { FrontSkillService } from 'src/app/services/front-skill.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-front-skill',
  templateUrl: './front-skill.component.html',
  styleUrls: ['./front-skill.component.css', '../skills/skills.component.css']
})
export class FrontSkillComponent implements OnInit {

  frontEnd: FrontSkill[] = [];
  id?:number;
  frontSkill: FrontSkill = {
    id: 0,
    position: 0,
    name: '',
    percentage: 50
  };

  constructor(
    private frontskillService: FrontSkillService,
    protected tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.loadSkill();
  }

  onClean(): void {
    this.frontSkill.name = '';
    this.frontSkill.percentage = 50;
  }

  onDropped(event: CdkDragDrop<any>): void {
    moveItemInArray(this.frontEnd, event.previousIndex, event.currentIndex);
    this.frontEnd.forEach(front => {
      front.position = this.frontEnd.indexOf(front);
      this.frontskillService.updatePos(front.id!, front).subscribe(data => {
      }, err => {
        alert("No se pudo modificar la posición");
      });
    });
  }

  loadSkill(): void {
    this.frontskillService.list().subscribe(data => {
      this.frontEnd = data;
    });
  }

  onDetail(): void {
    this.frontskillService.detail(this.id!).subscribe(data => {
      this.frontSkill = data;
    }, err => {
      alert("No se pudieron cargar los datos");
    });
  }

  delete(id: number): void {
    if(id != undefined) {
      this.frontskillService.delete(id).subscribe(data => {
        this.loadSkill();
      }, err => {
        alert("No se pudo eliminar");
      });
    }
  }

}

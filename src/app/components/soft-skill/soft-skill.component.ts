import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { SoftSkill } from 'src/app/models/soft-skill.model';
import { SoftSkillService } from 'src/app/services/soft-skill.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-soft-skill',
  templateUrl: './soft-skill.component.html',
  styleUrls: ['./soft-skill.component.css', '../skills/skills.component.css']
})
export class SoftSkillComponent implements OnInit {

  soft: SoftSkill[] = null!;
  id?: number;
  softSkill: SoftSkill = {
    id: 0,
    position: 1000,
    name: '',
    percentage: 50
  };

  constructor(
    private softskillService: SoftSkillService,
    protected tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.loadSkill();
  }

  onClean(): void {
    this.softSkill.position = 1000,
    this.softSkill.name = '';
    this.softSkill.percentage = 50;
  }

  onDropped(event: CdkDragDrop<any>): void {
    moveItemInArray(this.soft, event.previousIndex, event.currentIndex);
    this.soft.forEach(soft => {
      soft.position = this.soft.indexOf(soft);
      this.softskillService.updatePos(soft.id!, soft).subscribe(data => {
      }, err => {
        alert("No se pudo modificar la posición");
      });
    });
  }

  loadSkill(): void {
    this.softskillService.list().subscribe(data => {
      this.soft = data;
    });
  }

  onDetail(): void {
    this.softskillService.detail(this.id!).subscribe(data => {
      this.softSkill = data;
    }, err => {
      alert("No se pudieron cargar los datos");
    });
  }

  delete(id: number): void {
    if(id != undefined) {
      this.softskillService.delete(id).subscribe(data => {
        this.loadSkill();
      }, err => {
        alert("No se pudo eliminar");
      });
    }
  }

}

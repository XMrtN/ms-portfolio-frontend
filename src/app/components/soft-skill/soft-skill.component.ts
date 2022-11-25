import { Component, OnInit } from '@angular/core';
import { SoftSkill } from 'src/app/models/soft-skill.model';
import { SoftSkillService } from 'src/app/services/soft-skill.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-soft-skill',
  templateUrl: './soft-skill.component.html',
  styleUrls: ['./soft-skill.component.css']
})
export class SoftSkillComponent implements OnInit {

  isLoggedIn: boolean = false;
  soft: SoftSkill[] = [];
  id?: number;
  softSkill: SoftSkill = {
    id: 0,
    name: '',
    percentage: 50
  }

  constructor(
    private softskillService: SoftSkillService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.loadSkill();

    if(this.tokenService.getToken()) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  loadSkill(): void {
    this.softskillService.list().subscribe(data => {
      this.soft = data;
    })
  }

  onDetail(): void {
    this.softskillService.detail(this.id!).subscribe(data => {
      this.softSkill = data;
    }, err => {
      alert("No se pudieron cargar los datos");
    })
  }

  delete(id: number): void {
    if(id != undefined) {
      this.softskillService.delete(id).subscribe(data => {
        this.loadSkill();
      }, err => {
        alert("No se pudo eliminar");
      })
    }
  }

}

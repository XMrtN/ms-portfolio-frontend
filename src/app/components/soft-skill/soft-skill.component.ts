import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill.model';
import { SoftSkillService } from 'src/app/services/soft-skill.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-soft-skill',
  templateUrl: './soft-skill.component.html',
  styleUrls: ['./soft-skill.component.css']
})
export class SoftSkillComponent implements OnInit {

  isLoggedIn: boolean = false
  soft: Skill[] = []

  constructor(
    private softskillService: SoftSkillService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.loadSkill()

    if(this.tokenService.getToken()) {
      this.isLoggedIn = true
    } else {
      this.isLoggedIn = false
    }
  }

  loadSkill(): void {
    this.softskillService.list().subscribe(data => {
      this.soft = data
    })
  }

  delete(id: number): void {
    if(id != undefined) {
      this.softskillService.delete(id).subscribe(data => {
        this.loadSkill()
      }, err => {
        alert("No se pudo eliminar")
      })
    }
  }

}

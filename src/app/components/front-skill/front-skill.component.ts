import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill.model';
import { FrontSkillService } from 'src/app/services/front-skill.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-front-skill',
  templateUrl: './front-skill.component.html',
  styleUrls: ['./front-skill.component.css']
})
export class FrontSkillComponent implements OnInit {

  isLoggedIn: boolean = false
  frontEnd: Skill[] = []

  constructor(
    private frontskillService: FrontSkillService,
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
    this.frontskillService.list().subscribe(data => {
      this.frontEnd = data
    })
  }

  delete(id: number): void {
    if(id != undefined) {
      this.frontskillService.delete(id).subscribe(data => {
        this.loadSkill()
      }, err => {
        alert("No se pudo eliminar")
      })
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { BackSkill } from 'src/app/models/back-skill.model';
import { BackSkillService } from 'src/app/services/back-skill.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-back-skill',
  templateUrl: './back-skill.component.html',
  styleUrls: ['./back-skill.component.css']
})
export class BackSkillComponent implements OnInit {

  isLoggedIn: boolean = false
  backEnd: BackSkill[] = []
  id: number
  backSkill: BackSkill = {
    id: 0,
    name: '',
    percentage: 50
  }

  constructor(
    private backskillService: BackSkillService,
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
    this.backskillService.list().subscribe(data => {
      this.backEnd = data
    })
  }

  onDetail(): void {
    this.backskillService.detail(this.id).subscribe(data => {
      this.backSkill = data
    }, err => {
      alert("No se pudieron cargar los datos")
    })
  }

  delete(id: number): void {
    if(id != undefined) {
      this.backskillService.delete(id).subscribe(data => {
        this.loadSkill()
      }, err => {
        alert("No se pudo eliminar")
      })
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/experience.model';
import { ExperienceService } from 'src/app/services/experience.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  
  isLoggedIn: boolean = false
  experience: Experience[] = []

  constructor(
    private experienceService: ExperienceService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.loadExp()
    
    if(this.tokenService.getToken()) {
      this.isLoggedIn = true
    } else {
      this.isLoggedIn = false
    }
  }

  loadExp(): void {
    this.experienceService.list().subscribe(data => {
      this.experience = data
    })
  }

  delete(id: number): void {
    if(id != undefined) {
      this.experienceService.delete(id).subscribe(data => {
        this.loadExp()
      }, err => {
        alert("No se pudo eliminar")
      })
    }
  }

}

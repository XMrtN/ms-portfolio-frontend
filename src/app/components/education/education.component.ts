import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education.model';
import { EducationService } from 'src/app/services/education.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  
  isLoggedIn: boolean = false
  education: Education[] = []
  id: number

  constructor(
    private educationService: EducationService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.loadEd()
    
    if(this.tokenService.getToken()) {
      this.isLoggedIn = true
    } else {
      this.isLoggedIn = false
    }
  }

  loadEd(): void {
    this.educationService.list().subscribe(data => {
      this.education = data
    })
  }

  delete(id: number): void {
    if(id != undefined) {
      this.educationService.delete(id).subscribe(data => {
        this.loadEd()
      }, err => {
        alert("No se pudo eliminar")
      })
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  isLoggedIn: boolean = false
  person: Person = null

  constructor(
    private personService: PersonService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.loadPerson()
    
    if(this.tokenService.getToken()) {
      this.isLoggedIn = true
    } else {
      this.isLoggedIn = false
    }
  }

  loadPerson(): void {
    this.personService.detail(1).subscribe(data => {
      this.person = data
    })
  }

}

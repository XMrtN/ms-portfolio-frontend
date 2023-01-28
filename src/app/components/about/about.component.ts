import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Education } from 'src/app/models/education.model';
import { Experience } from 'src/app/models/experience.model';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  education: Education[] = null!;
  experience: Experience[] = null!;
  
  constructor(
    protected appComponent: AppComponent,
    protected tokenService: TokenService
  ) { }

  ngOnInit(): void {
  }

}

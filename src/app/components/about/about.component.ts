import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    protected appComponent: AppComponent,
    protected tokenService: TokenService
  ) { }

  ngOnInit(): void {
  }

}

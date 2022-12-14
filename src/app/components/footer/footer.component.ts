import { Component, OnInit } from '@angular/core';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(protected mainComponent: MainComponent) { }

  ngOnInit() {
  }

}

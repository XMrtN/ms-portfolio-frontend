import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ColorsService } from 'src/app/services/colors.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  value: string = '';

  constructor(
    protected tokenService: TokenService,
    protected appComponent: AppComponent,
    protected colorsService: ColorsService
  ) { }

  ngOnInit() {
  }

  onUpdateColor(): void {
    this.colorsService.update(
      this.appComponent.colors.id!,
      this.appComponent.colorsEdit
    ).subscribe(data => {
    }, err => {
      alert("No se pudieron modificar los colores");
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Proyect } from 'src/app/models/proyect.model';
import { ImageService } from 'src/app/services/image.service';
import { ProyectService } from 'src/app/services/proyect.service';
import { ProyectsComponent } from '../proyects.component';

@Component({
  selector: 'app-new-proyect',
  templateUrl: './new-proyect.component.html',
  styleUrls: ['./new-proyect.component.css']
})
export class NewProyectComponent implements OnInit {

  proyectTitle?: string;
  proyectSubtitle?: string;
  proyectFinishDate?: string;
  proyectDescription?: string;
  proyectImg?: string;
  proyectUrl?: string;
  
  constructor(
    private proyectService: ProyectService,
    private proyectsComponent: ProyectsComponent,
    public imageService: ImageService
  ) { }
  
  ngOnInit(): void {
  }

  onClean(): void {
    this.proyectTitle = '';
    this.proyectSubtitle = '';
    this.proyectFinishDate = '';
    this.proyectDescription = '';
    this.proyectImg = '';
    this.proyectUrl = '';
  }

  onCreate(): void {
    // this.proyectImg = this.imageService.url
    const proyect = new Proyect(this.proyectTitle!, this.proyectSubtitle!, this.proyectFinishDate!, this.proyectDescription!, this.proyectImg!, this.proyectUrl!);
    this.proyectService.save(proyect).subscribe(data => {
      this.proyectsComponent.loadProyect();
    }, err => {
      alert("No se pudo agregar");
    })
    this.onClean();
  }

  // uploadImage($event: any) {
  //   const name = "proyect" + proyect.id
  //   this.imageService.uploadImage($event, name)
  // }

}

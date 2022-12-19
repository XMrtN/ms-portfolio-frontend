import { Component, OnInit } from '@angular/core';
import { Proyect } from 'src/app/models/proyect.model';
import { ImageService } from 'src/app/services/image.service';
import { ProyectService } from 'src/app/services/proyect.service';
import { ProyectsComponent } from '../proyects.component';

@Component({
  selector: 'app-new-proyect',
  templateUrl: './new-proyect.component.html',
  styleUrls: ['./new-proyect.component.css', '../proyects.component.css']
})
export class NewProyectComponent implements OnInit {
  
  constructor(
    private proyectService: ProyectService,
    protected proyectsComponent: ProyectsComponent,
    public imageService: ImageService
  ) { }
  
  ngOnInit(): void {
  }

  onCreate(): void {
    this.proyectsComponent.proyect.img = this.imageService.url!;
    const proyect = new Proyect(
      this.proyectsComponent.proyect.position,
      this.proyectsComponent.proyect.title,
      this.proyectsComponent.proyect.subtitle,
      this.proyectsComponent.proyect.finishDate,
      this.proyectsComponent.proyect.description,
      this.proyectsComponent.proyect.img,
      this.proyectsComponent.proyect.url
    );
    this.proyectService.save(proyect).subscribe(data => {
      this.proyectsComponent.loadProyect();
    }, err => {
      alert("No se pudo agregar");
    });
    this.proyectsComponent.onClean();
    this.imageService.clearUrl();
  }

  uploadImage($event: any) {
    this.imageService.uploadImage($event, 'image/proyects/', `proyect_${this.proyectsComponent.proyect.title}`);
  }

}

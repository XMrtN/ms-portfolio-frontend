import { Component, OnInit } from '@angular/core';
import { Proyect } from 'src/app/models/proyect.model';
import { ImageService } from 'src/app/services/image.service';
import { ProyectService } from 'src/app/services/proyect.service';
import { ProyectsComponent } from '../proyects.component';

@Component({
  selector: 'app-edit-proyect',
  templateUrl: './edit-proyect.component.html',
  styleUrls: ['./edit-proyect.component.css', '../proyects.component.css']
})
export class EditProyectComponent implements OnInit {

  constructor(
    private proyectService: ProyectService,
    protected proyectsComponent: ProyectsComponent,
    public imageService: ImageService
  ) { }
  
  ngOnInit(): void {
  }

  onUpdate(): void {
    this.proyectsComponent.proyect.img = this.imageService.url!;
    this.proyectService.update(
      this.proyectsComponent.id!,
      this.proyectsComponent.proyect
    ).subscribe(data => {
      this.proyectsComponent.loadProyect();
    }, err => {
      alert("No se pudo modificar");
    });
    this.proyectsComponent.onClean();
    this.imageService.clearUrl();
  }

  uploadImage($event: any) {
    this.imageService.uploadImage($event, 'image/proyects/', `proyect_${this.proyectsComponent.proyect.title}`);
  }

}

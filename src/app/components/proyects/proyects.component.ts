import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Proyect } from 'src/app/models/proyect.model';
import { ImageService } from 'src/app/services/image.service';
import { ProyectService } from 'src/app/services/proyect.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit {

  proyects: Proyect[] = null!;
  id?: number;
  proyect: Proyect = {
    id: 0,
    position: 1000,
    title: '',
    subtitle: '',
    finishDate: '',
    description: '',
    img: '',
    url: ''
  };

  constructor(
    private proyectService: ProyectService,
    protected tokenService: TokenService,
    public imageService: ImageService
  ) { }
  
  ngOnInit(): void {
    this.loadProyect();
  }

  onClean(): void {
    this.proyect.position = 1000,
    this.proyect.title = '';
    this.proyect.subtitle = '';
    this.proyect.finishDate = '';
    this.proyect.description = '';
    this.proyect.img = '';
    this.proyect.url = '';
  }

  onDropped(event: CdkDragDrop<any>): void {
    moveItemInArray(this.proyects, event.previousIndex, event.currentIndex);
    this.proyects.forEach(proy => {
      proy.position = this.proyects.indexOf(proy);
      this.proyectService.updatePos(proy.id!, proy).subscribe(data => {
      }, err => {
        alert("No se pudo modificar la posición");
      });
    });
  }

  loadProyect(): void {
    this.proyectService.list().subscribe(data => {
      this.proyects = data;
    });
  }

  onDetail(): void {
    this.proyectService.detail(this.id!).subscribe(data => {
      this.proyect = data;
    }, err => {
      alert("No se pudieron cargar los datos");
    });
  }

  delete(id: number, title: string): void {
    if(id != undefined) {
      this.imageService.deleteImages(`image/proyects/proyect_${title}`);
      this.proyectService.delete(id).subscribe(data => {
        this.loadProyect();
      }, err => {
        alert("No se pudo eliminar");
      });
    }
  }

}

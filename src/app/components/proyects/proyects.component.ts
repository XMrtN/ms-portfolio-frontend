import { Component, OnInit } from '@angular/core';
import { Proyect } from 'src/app/models/proyect.model';
import { ProyectService } from 'src/app/services/proyect.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  proyects: Proyect[] = [];
  id?: number;
  proyect: Proyect = {
    id: 0,
    title: '',
    subtitle: '',
    finishDate: '',
    description: '',
    img: '',
    url: ''
  };

  constructor(
    private proyectService: ProyectService,
    protected tokenService: TokenService
  ) { }
  
  ngOnInit(): void {
    this.loadProyect();
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

  delete(id: number): void {
    if(id != undefined) {
      this.proyectService.delete(id).subscribe(data => {
        this.loadProyect();
      }, err => {
        alert("No se pudo eliminar");
      });
    }
  }

}

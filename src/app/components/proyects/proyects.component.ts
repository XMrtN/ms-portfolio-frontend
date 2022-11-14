import { Component, OnInit } from '@angular/core';
import { Proyect } from 'src/app/models/proyect.model';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  constructor() { }

  proyects: Proyect[] = []

  ngOnInit(): void {
    this.proyectsList()
  }

  proyectsList(): void {
    this.proyects.push(new Proyect(
      "../../../assets/img/proyects/Wiki Rift.png",
      "Wiki Rift",
      "Proyecto intermedio de materia 2021.",
      "Una simple página informativa acerca de el videojuego League of Legends: Wild Rift.",
      "https://github.com/XMrtN/WikiRift"
    ))
    
    this.proyects.push(new Proyect(
      "../../../assets/img/proyects/Summoner's pedia.png",
      "Summoner's pedia",
      "Proyecto final de materia 2021.",
      "Versión mejorada y mucho más completa del proyecto Wiki Rift.",
      "https://github.com/XMrtN/SummonersPedia"
    ))
    
    this.proyects.push(new Proyect(
      "../../../assets/img/proyects/IMCalculator.png",
      "IMCalculator",
      "Proyecto final de materia 2021.",
      "Una página muy simple hecha con PHP para medir el índice de masa corporal.",
      "https://github.com/XMrtN/IMCalculator"
    ))
    
    this.proyects.push(new Proyect(
      "../../../assets/img/proyects/Portfolio.png",
      "Portfolio Full Stack",
      "Proyecto final de #ArgentinaPrograma 2022-2023.",
      "Basado de Bootstrap y desarrollado en Angular y Java.",
      "https://github.com/XMrtN/portfolio-FrontEnd"
    ))
  }

}

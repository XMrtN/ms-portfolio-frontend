import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn: boolean = false
  person: Person = null
  parallax = [
    { url: "../../../assets/img/bg/stars.png", alt: "stars" },
    { url: "../../../assets/img/bg/moon.png", alt: "moon" },
    { url: "../../../assets/img/bg/shadow.png", alt: "shadow" },
    { url: "../../../assets/img/bg/building.png", alt: "building" },
    { url: "../../../assets/img/bg/smoke.png", alt: "smoke" },
    { url: "../../../assets/img/bg/road.png", alt: "road" },
  ]
  id: number
  personEdit: Person = {
    id: 0,
    name: "",
    lastName: "",
    description: "",
    img: ""
  }

  constructor(
    private personService: PersonService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.loadPerson()
    this.initAnimations()

    if(this.tokenService.getToken()) {
      this.isLoggedIn = true
    } else {
      this.isLoggedIn = false
    }

    document.querySelectorAll("img").forEach(img => {
      if (img.complete) {
        this.parallaxAnimations()
      } else {
        img.addEventListener("load", imgLoaded => this.parallaxAnimations())
      }
    })
  }

  loadPerson(): void {
    this.personService.detail(1).subscribe(data => {
      this.person = data
    })
  }

  onDetail(): void {
    this.personService.detail(this.id).subscribe(data => {
      this.personEdit = data
    }, err => {
      alert("No se pudieron cargar los datos")
    })
  }

  initAnimations(): void {
    window.addEventListener("load", () => {
      gsap.to("#home h1, #home p, .imgBox", {
        duration: 1,
        x: 0,
        opacity: 1,
        stagger: 0.4,
        delay: 2.4,
      })
    })
  }

  parallaxAnimations(): void {
    const parallax = gsap.timeline()
      .fromTo(".stars", {x: -200}, {x: 200})
      .to(".moon", {y: 400}, "<")
      .to(".shadow", {y: 300}, "<")
      .to(".building", {y: 150}, "<")
      .to(".smoke", {y: 100}, "<")
    
    ScrollTrigger.create({
      animation: parallax,
      trigger: "#home",
      start: "top 0%",
      end: "bottom 0%",
      scrub: 1
    })
  }
  
}

import { Component, OnInit } from '@angular/core';
import { ParallaxImg } from 'src/app/models/parallax.model';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  person: Person = new Person("", "", "")

  constructor(public personService: PersonService) { }

  parallax: ParallaxImg[] = []

  ngOnInit(): void {
    this.initScrollAnimations()
    this.parallaxAnimations()
    this.parallaxImages()
    this.personService.getPerson().subscribe(data => {
      this.person = data
    })
  }

  initScrollAnimations(): void {
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
    window.addEventListener("load", () => {
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
        scrub: 0.5
      })
    })
  }

  parallaxImages(): void {
    this.parallax.push(new ParallaxImg(
      "../../../assets/img/bg/stars.png",
      "stars"
    ))
    this.parallax.push(new ParallaxImg(
      "../../../assets/img/bg/moon.png",
      "moon"
    ))
    this.parallax.push(new ParallaxImg(
      "../../../assets/img/bg/shadow.png",
      "shadow"
    ))
    this.parallax.push(new ParallaxImg(
      "../../../assets/img/bg/building.png",
      "building"
    ))
    this.parallax.push(new ParallaxImg(
      "../../../assets/img/bg/smoke.png",
      "smoke"
    ))
    this.parallax.push(new ParallaxImg(
      "../../../assets/img/bg/road.png",
      "road"
    ))
  }
  
}

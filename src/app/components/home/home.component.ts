import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AppComponent } from 'src/app/app.component';
import { TokenService } from 'src/app/services/token.service';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  parallax = [
    { url: "../../../assets/img/bg/stars.png", alt: "stars" },
    { url: "../../../assets/img/bg/moon.png", alt: "moon" },
    { url: "../../../assets/img/bg/shadow.png", alt: "shadow" },
    { url: "../../../assets/img/bg/building.png", alt: "building" },
    { url: "../../../assets/img/bg/smoke.png", alt: "smoke" },
    { url: "../../../assets/img/bg/road.png", alt: "road" },
  ];

  constructor(
    protected tokenService: TokenService, 
    protected appComponent: AppComponent
  ) { }

  ngOnInit(): void {
    this.initAnimations();

    window.addEventListener("load", () => {
      document.querySelectorAll("img").forEach(img => {
        if(img.complete) {
          this.parallaxAnimations();
        } else {
          img.addEventListener("load", () => this.parallaxAnimations());
        }
      });
    });
  }

  initAnimations(): void {
    window.addEventListener("load", () => {
      gsap.from("#home h1, #home p, .btn-cv, .order-md-last", {
        duration: 1,
        x: -150,
        opacity: 0,
        stagger: 0.4,
        delay: 2.4,
      });
    });
  }

  parallaxAnimations(): void {
    const parallax = gsap.timeline()
      .fromTo(".stars", {x: -200}, {x: 200})
      .to(".moon", {y: 400}, "<")
      .to(".shadow", {y: 300}, "<")
      .to(".building", {y: 150}, "<")
      .to(".smoke", {y: 100}, "<");
    
    ScrollTrigger.create({
      animation: parallax,
      trigger: "#home",
      start: "top 0%",
      end: "bottom 0%",
      scrub: 1
    });
  }
  
}

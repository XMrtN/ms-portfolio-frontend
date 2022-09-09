import { Component, OnInit } from '@angular/core';
gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initScrollAnimaitons();
  }
  
  initScrollAnimaitons(): void {
    const parallax = gsap.timeline({
      scrollTrigger: {
        trigger: ".banner",
        start: "top 0%",
        end: "bottom 0%",
        scrub: 1
      }
    })
      .fromTo(".stars", {x: -250}, {x: 250})
      .to(".moon", {y: 400}, "<")
      .to(".shadow", {y: 300}, "<")
      .to(".building", {y: 200}, "<")
      .to(".smoke", {y: 100}, "<")
  }
}

import { Component, OnInit } from '@angular/core';
gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'app-scroll-btn',
  templateUrl: './scroll-btn.component.html',
  styleUrls: ['./scroll-btn.component.css']
})
export class ScrollBtnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initScrollAnimaitons();
  }
  
  initScrollAnimaitons(): void {
    gsap.from(".scroll-up__btn", {
      duration: 0.5,
      x: 16,
      opacity: 0,
      scrollTrigger: {
        trigger: "#contact .container",
        start: "top 90%",
        end: "bottom 10%",
        toggleActions: "play reverse play reverse"
      }
    })
  }
}

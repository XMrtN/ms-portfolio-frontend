import { Component, OnInit } from '@angular/core';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.css']
})
export class SocialsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initScrollAnimations();
  }

  initScrollAnimations(): void {
    gsap.from(".socials", {
      duration: 0.5,
      y: 50,
      delay: 3.4,
      scrollTrigger: {
        trigger: "#about .container",
        start: "top 90%",
        end: "top 10%",
        toggleActions: "play reverse play reverse"
      }
    })
  }
}

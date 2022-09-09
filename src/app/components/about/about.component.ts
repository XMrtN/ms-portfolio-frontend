import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initAnimations();
    this.initScrollAnimations();
  }

  initAnimations(): void {
    const typed = new Typed(".typing", { 
      strings: ["Martín Sepúlveda", "Un Desarrollador Full Stack Jr."],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    })
  }

  initScrollAnimations(): void {
    gsap.from(".textBox, .imgBox", {
      duration: 1,
      x: -100,
      opacity: 0,
      stagger: 0.4,
      delay: 2.4,
    })
  }
}

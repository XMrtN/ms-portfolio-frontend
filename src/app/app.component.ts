import { Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLoaded: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.initAnimaitons();
    this.initScrollAnimaitons();
  }

  initAnimaitons(): void {
    window.addEventListener("load", () => {
      document.querySelector(".wrapper")?.classList.add("fade");
      setTimeout(() => {this.isLoaded = true}, 2000);
    });
  }

  initScrollAnimaitons(): void {
    window.addEventListener("load", () => {
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((text) => {
        ScrollTrigger.create({
          trigger: text,
          toggleClass: "active",
          start: "top 100%",
          end: "bottom 0%"
        });
      });
    });
  }

}

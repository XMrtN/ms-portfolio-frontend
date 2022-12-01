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
      gsap.utils.toArray<HTMLElement>(".reveal").forEach(text => {
        ScrollTrigger.create({
          trigger: text,
          start: "top 90%",
          end: "bottom 10%",
          onRefreshInit () { text.classList.add("hidden") },
          onEnter: () => text.classList.remove("hidden"),
          onLeaveBack: () => text.classList.add("hidden")
        });
      });
    });
  }

}

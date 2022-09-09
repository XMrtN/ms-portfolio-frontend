import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() { }

  ngOnInit(): void {
    this.initAnimaitons();
    this.initScrollAnimaitons();
  }

  initAnimaitons(): void {
    window.addEventListener("load", function() {
      const loaderWrapper =  document.querySelector(".wrapper");
      loaderWrapper?.classList.add("fade");
    })
  }

  initScrollAnimaitons(): void {
    const reveal = gsap.utils.toArray<HTMLElement>(".reveal").forEach((text) => {
      ScrollTrigger.create({
        trigger: text,
        toggleClass: "active",
        start: "top 90%",
        end: "bottom 10%"
      })
    })
  }
}

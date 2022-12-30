import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(protected appComponent: AppComponent) { }
  
  ngOnInit(): void {
    this.initAnimations();
  }
  
  initAnimations(): void {
    window.addEventListener("load", () => {
      gsap.from(".navbar", {duration: 2, y: -100, delay: 0.5, ease: "expo.out"});
      gsap.from(".nav-logo img, .navbar-toggler", {duration: 2, y: -100, delay: 1.5, ease: "expo.out", stagger: 0.2});
      gsap.from(".nav-link", {duration: 2, y: -100, delay: 1.8, ease: "expo.out", stagger: 0.2});
      gsap.from(".nav-button", {duration: 2, y: -100, delay: 2.3, ease: "expo.out", stagger: 0.2});
    });
  }

}

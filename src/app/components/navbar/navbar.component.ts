import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { gsap } from 'gsap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(protected tokenService: TokenService) { }
  
  ngOnInit(): void {
    this.initAnimations();
  }
  
  initAnimations(): void {
    window.addEventListener("load", () => {
      const tl = gsap.timeline({defaults: {duration: 1}})
      .to(".nav-logo img", {y: 0}, 1)
      .to(".navbar-toggler", {y: 0}, "<0.5")
      .to(".nav-link", {y: 0, stagger: 0.2}, "<0.5")
      .to(".log-btns", {y: 0}, "<1.2");
    });
  }

  onLogOut(): void {
    this.tokenService.logOut();
  }

}

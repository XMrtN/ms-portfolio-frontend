import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(private auth: AuthorizationService) { }
  
  ngOnInit(): void {
    this.initAnimations()
  }
  
  initAnimations(): void {
    window.addEventListener("load", () => {
      const tl = gsap.timeline({defaults: {duration: 1}})
      .to(".nav-logo:first-child img", {y: 0}, 1)
      .to(".navbar-toggler", {y: 0}, "<0.5")
      .to(".nav-link", {y: 0, stagger: 0.2}, "<0.5")
      .to(".nav-logo:last-child img", {y: 0});
    })
  }

  public get isLoggedIn(): boolean {
    return this.auth.isUserLoggedIn()
  }

  public btnLogOut(): void {
    this.auth.logOut()
  }

}

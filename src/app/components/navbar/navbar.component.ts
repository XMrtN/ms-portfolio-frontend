import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  isLoggedIn: boolean = false

  constructor(private router: Router, private tokenService: TokenService) { }
  
  ngOnInit(): void {
    this.initAnimations()

    if(this.tokenService.getToken()) {
      this.isLoggedIn = true
    } else {
      this.isLoggedIn = false
    }
  }
  
  initAnimations(): void {
    window.addEventListener("load", () => {
      const tl = gsap.timeline({defaults: {duration: 1}})
      .to(".nav-logo img", {y: 0}, 1)
      .to(".navbar-toggler", {y: 0}, "<0.5")
      .to(".nav-link", {y: 0, stagger: 0.2}, "<0.5")
      .to(".login-btn, .logout-btn", {y: 0}, "<1.2");
    })
  }

  onLogOut(): void {
    this.tokenService.logOut()
    window.location.reload()
  }

  logIn(): void {
    this.router.navigate(['/login'])
  }

}

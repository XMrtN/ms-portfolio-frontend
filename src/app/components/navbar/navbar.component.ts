import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { AppComponent } from 'src/app/app.component';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    protected appComponent: AppComponent,
    protected tokenService: TokenService
  ) { }
  
  ngOnInit(): void {
    this.initAnimations();
    this.onDarkMode();
  }
  
  initAnimations(): void {
    window.addEventListener("load", () => {
      gsap.from(".nav-logo img, .navbar-toggler", {duration: 2, y: -100, delay: 1.5, ease: "expo.out", stagger: 0.2});
      gsap.from(".navbar .nav-link", {duration: 2, y: -100, delay: 1.8, ease: "expo.out", stagger: 0.2});
      gsap.from(".nav-button", {duration: 2, y: -100, delay: 2.3, ease: "expo.out", stagger: 0.2});
    });
  }

  onDarkMode():void {
    const storedTheme = localStorage.getItem('theme');
    
    const getPreferredTheme = () => {
      if (storedTheme) {
        return storedTheme;
      }
  
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
  
    const setTheme = function (theme: string) {
      if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-bs-theme', theme);
      }
    }
  
    setTheme(getPreferredTheme());
  
    const showActiveTheme = (theme: string) => {
      const activeThemeIcon = document.querySelector('.dropdown-toggle i');
      const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`);
      const svgOfActiveBtn = btnToActive!.querySelector('i')!.className;
  
      document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
        element.classList.remove('active');
      })
  
      btnToActive!.classList.add('active');
      activeThemeIcon!.setAttribute('class', svgOfActiveBtn);
    }
  
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (storedTheme !== 'light' && storedTheme !== 'dark') {
        setTheme(getPreferredTheme());
      }
    })
  
    window.addEventListener('DOMContentLoaded', () => {
      showActiveTheme(getPreferredTheme());
  
      document.querySelectorAll('[data-bs-theme-value]')
        .forEach(toggle => {
          toggle.addEventListener('click', () => {
            const theme = toggle.getAttribute('data-bs-theme-value');
            localStorage.setItem('theme', theme!);
            setTheme(theme!);
            showActiveTheme(theme!);
          })
        })
    })
  }

}

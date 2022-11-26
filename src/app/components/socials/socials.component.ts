import { Component, OnInit } from '@angular/core';
import { Social } from 'src/app/models/social.model';
import { SocialService } from 'src/app/services/social.service';
import { TokenService } from 'src/app/services/token.service';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.css']
})
export class SocialsComponent implements OnInit {

  socials: Social[] = [];
  id?: number;
  social: Social = {
    id: 0,
    icon: '',
    url: ''
  };

  constructor(
    private socialService: SocialService,
    protected tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.initScrollAnimations();
    this.loadSocial();
  }

  loadSocial(): void {
    this.socialService.list().subscribe(data => {
      this.socials = data;
    });
  }

  onDetail(): void {
    this.socialService.detail(this.id!).subscribe(data => {
      this.social = data;
    }, err => {
      alert("No se pudieron cargar los datos");
    });
  }

  delete(id: number): void {
    if(id != undefined) {
      this.socialService.delete(id).subscribe(data => {
        this.loadSocial();
      }, err => {
        alert("No se pudo eliminar");
      });
    }
  }

  initScrollAnimations(): void {
    window.addEventListener("load", () => {
      gsap.to(".scroll-up__btn", {
        duration: 0.5,
        x: 16,
        opacity: 0,
        pointerEvents: "none",
        scrollTrigger: {
          trigger: "#home .container",
          start: "top 100%",
          end: "bottom 50%",
          toggleActions: "play reverse play reverse"
        }
      });

      gsap.to(".socials-widget-container", {
        duration: 0.5,
        y: 0,
        delay: 3.4,
        scrollTrigger: {
          trigger: "#home .container",
          start: "top 100%",
          end: "bottom 50%",
          toggleActions: "play reverse play reverse"
        }
      });
    });
  }

  // socialLinks(): void {
  //   this.socials.push(new SocialLink(
  //     "facebook",
  //     "https://m.facebook.com/people/Mart%C3%ADn-Sep%C3%BAlveda/100071287513937/"
  //   ))
  //   this.socials.push(new SocialLink(
  //     "telegram",
  //     "https://telegram.me/XMrtN"
  //   ))
  //   this.socials.push(new SocialLink(
  //     "instagram",
  //     "https://www.instagram.com/martin07.24/"
  //   ))
  //   this.socials.push(new SocialLink(
  //     "github",
  //     "https://github.com/XMrtN"
  //   ))
  // }

}

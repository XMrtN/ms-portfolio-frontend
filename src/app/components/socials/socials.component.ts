import { Component, OnInit } from '@angular/core';
import { SocialLink } from 'src/app/models/socials.model';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.css']
})
export class SocialsComponent implements OnInit {

  constructor() { }

  socials: SocialLink[] = []

  ngOnInit(): void {
    this.initScrollAnimations()
    this.socialLinks()
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
      })

      gsap.to(".socials", {
          duration: 0.5,
          y: 0,
          delay: 3.4,
          scrollTrigger: {
            trigger: "#home .container",
            start: "top 100%",
            end: "bottom 50%",
            toggleActions: "play reverse play reverse"
          }
      })
    })
  }

  socialLinks(): void {
    this.socials.push(new SocialLink(
      "facebook",
      "https://m.facebook.com/people/Mart%C3%ADn-Sep%C3%BAlveda/100071287513937/"
    ))
    this.socials.push(new SocialLink(
      "telegram",
      "https://telegram.me/XMrtN"
    ))
    this.socials.push(new SocialLink(
      "instagram",
      "https://www.instagram.com/martin07.24/"
    ))
    this.socials.push(new SocialLink(
      "github",
      "https://github.com/XMrtN"
    ))
  }

}

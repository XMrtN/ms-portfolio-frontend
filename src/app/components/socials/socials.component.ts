import { Component, OnInit } from '@angular/core';
import { Social } from 'src/app/models/social.model';
import { SocialService } from 'src/app/services/social.service';
import { TokenService } from 'src/app/services/token.service';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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
    position: 0,
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

  onClean(): void {
    this.social.icon = '';
    this.social.url = '';
  }

  onDropped(event: CdkDragDrop<any>): void {
    moveItemInArray(this.socials, event.previousIndex, event.currentIndex);
    this.socials.forEach(link => {
      link.position = this.socials.indexOf(link);
      this.socialService.updatePos(link.id!, link).subscribe(data => {
      }, err => {
        alert("No se pudo modificar la posición");
      });
    });
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

      gsap.from(".socials-widget-container", {
        duration: 0.5,
        y: 50,
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

}

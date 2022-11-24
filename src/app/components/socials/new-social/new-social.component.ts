import { Component, OnInit } from '@angular/core';
import { Social } from 'src/app/models/social.model';
import { SocialService } from 'src/app/services/social.service';
import { SocialsComponent } from '../socials.component';

@Component({
  selector: 'app-new-social',
  templateUrl: './new-social.component.html',
  styleUrls: ['./new-social.component.css']
})
export class NewSocialComponent implements OnInit {

  socialIcon: string
  socialUrl: string
  
  constructor(
    private socialService: SocialService,
    private socialsComponent: SocialsComponent
  ) { }
  
  ngOnInit(): void {
  }

  onClean(): void {
    this.socialIcon = ''
    this.socialUrl = ''
  }

  onCreate(): void {
    const social = new Social(this.socialIcon, this.socialUrl)
    this.socialService.save(social).subscribe(data => {
      this.socialsComponent.loadSocial()
    }, err => {
      alert("No se pudo agregar")
    })
    this.onClean()
  }

}

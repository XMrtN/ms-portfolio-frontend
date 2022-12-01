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
  
  constructor(
    private socialService: SocialService,
    protected socialsComponent: SocialsComponent
  ) { }
  
  ngOnInit(): void {
  }

  onCreate(): void {
    const social = new Social(
      this.socialsComponent.social.position,
      this.socialsComponent.social.icon,
      this.socialsComponent.social.url
    );
    this.socialService.save(social).subscribe(data => {
      this.socialsComponent.loadSocial();
    }, err => {
      alert("No se pudo agregar");
    });
    this.socialsComponent.onClean();
  }

}

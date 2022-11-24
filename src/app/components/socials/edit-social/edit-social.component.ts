import { Component, OnInit } from '@angular/core';
import { SocialService } from 'src/app/services/social.service';
import { SocialsComponent } from '../socials.component';

@Component({
  selector: 'app-edit-social',
  templateUrl: './edit-social.component.html',
  styleUrls: ['./edit-social.component.css']
})
export class EditSocialComponent implements OnInit {

  constructor(
    private socialService: SocialService,
    protected socialsComponent: SocialsComponent
  ) { }
  
  ngOnInit(): void {
  }

  onUpdate(): void {
    this.socialService.update(this.socialsComponent.id, this.socialsComponent.social).subscribe(data => {
      this.socialsComponent.loadSocial()
    }, err => {
      alert("No se pudo modificar")
    })
  }

}

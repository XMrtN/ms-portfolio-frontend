import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { PersonService } from 'src/app/services/person.service';
import { HomeComponent } from '../home.component';

@Component({
  selector: 'app-edit-home',
  templateUrl: './edit-home.component.html',
  styleUrls: ['./edit-home.component.css']
})
export class EditHomeComponent implements OnInit {

  constructor(
    private personService: PersonService,
    protected homeComponent: HomeComponent,
    public imageService: ImageService
  ) { }

  ngOnInit(): void {
  }

  onUpdate(): void {
    this.homeComponent.personEdit.img = this.imageService.url!;
    this.personService.update(this.homeComponent.id!, this.homeComponent.personEdit).subscribe(data => {
      this.homeComponent.loadPerson();
    }, err => {
      alert("No se pudo modificar");
    })
  }

  uploadImage($event: any) {
    const name = "profile_1";
    this.imageService.uploadImage($event, name);
  }

}

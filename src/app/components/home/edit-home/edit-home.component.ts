import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { PdfService } from 'src/app/services/pdf.service';
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
    public imageService: ImageService,
    public pdfService: PdfService
  ) { }

  ngOnInit(): void {
  }

  onUpdate(): void {
    this.homeComponent.personEdit.img = this.imageService.url!;
    this.homeComponent.personEdit.cv = this.pdfService.url!;
    this.personService.update(
      this.homeComponent.id!,
      this.homeComponent.personEdit
    ).subscribe(data => {
      this.homeComponent.loadPerson();
    }, err => {
      alert("No se pudo modificar");
    });
    this.homeComponent.onClean();
  }

  uploadImage($event: any) {
    this.imageService.uploadImage($event, 'image/', `profile_${this.homeComponent.id}`);
  }

  uploadFile($event: any) {
    this.pdfService.uploadFile($event, 'file/', `profile-cv_${this.homeComponent.id}`);
  }

}

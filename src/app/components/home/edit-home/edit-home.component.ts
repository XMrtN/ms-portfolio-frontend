import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { PdfService } from 'src/app/services/pdf.service';
import { PersonService } from 'src/app/services/person.service';
import { MainComponent } from '../../main/main.component';

@Component({
  selector: 'app-edit-home',
  templateUrl: './edit-home.component.html',
  styleUrls: ['./edit-home.component.css']
})
export class EditHomeComponent implements OnInit {

  constructor(
    private personService: PersonService,
    protected mainComponent: MainComponent,
    public imageService: ImageService,
    public pdfService: PdfService
  ) { }

  ngOnInit(): void {
  }

  onUpdate(): void {
    this.mainComponent.personEdit.img = this.imageService.url!;
    this.mainComponent.personEdit.cv = this.pdfService.url!;
    this.personService.update(
      this.mainComponent.id!,
      this.mainComponent.personEdit
    ).subscribe(data => {
      this.mainComponent.loadPerson();
    }, err => {
      alert("No se pudo modificar");
    });
    this.mainComponent.onClean();
  }

  uploadImage($event: any) {
    this.imageService.uploadImage($event, 'image/', `profile_${this.mainComponent.id}`);
  }

  uploadFile($event: any) {
    this.pdfService.uploadFile($event, 'file/', `profile-cv_${this.mainComponent.id}`);
  }

}

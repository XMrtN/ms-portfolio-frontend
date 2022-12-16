import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ImageService } from 'src/app/services/image.service';
import { PdfService } from 'src/app/services/pdf.service';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-edit-home',
  templateUrl: './edit-home.component.html',
  styleUrls: ['./edit-home.component.css']
})
export class EditHomeComponent implements OnInit {

  constructor(
    private personService: PersonService,
    protected appComponent: AppComponent,
    public imageService: ImageService,
    public pdfService: PdfService
  ) { }

  ngOnInit(): void {
  }

  onUpdate(): void {
    this.appComponent.personEdit.img = this.imageService.url!;
    this.appComponent.personEdit.cv = this.pdfService.url!;
    this.personService.update(
      this.appComponent.personId!,
      this.appComponent.personEdit
    ).subscribe(data => {
      this.appComponent.loadPerson();
    }, err => {
      alert("No se pudo modificar");
    });
    this.appComponent.onPersonClean();
  }

  uploadImage($event: any) {
    this.imageService.uploadImage($event, 'image/', `profile_${this.appComponent.personId}`);
  }

  uploadFile($event: any) {
    this.pdfService.uploadFile($event, 'file/', `profile-cv_${this.appComponent.personId}`);
  }

}

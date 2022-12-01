import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  url?: string;

  constructor(private storage: Storage) { }

  public uploadFile($event: any, route: string, name: string) {
    const file = $event.target.files[0];
    const fileRef = ref(this.storage, route + name);
    uploadBytes(fileRef, file).then(response => {
      this.getFiles(route);
    }).catch(error => console.log(error));
  }

  getFiles(route: string) {
    const filesRef = ref(this.storage, route);
    list(filesRef).then(async response => {
      for(let i of response.items) {
        this.url = await getDownloadURL(i);
      }
    }).catch(error => console.log(error));
  }

}

import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL, deleteObject } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  url?: string;

  constructor(private storage: Storage) { }

  public uploadImage($event: any, route: string, name: string) {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, route + name);
    uploadBytes(imgRef, file).then(response => {
      this.getImages(route, name);
    }).catch(error => console.log(error));
  }

  getImages(route: string, name: string) {
    const imagesRef = ref(this.storage, route);
    list(imagesRef).then(async response => {
      for(let i of response.items) {
        if(i.fullPath.includes(name)) {
          this.url = await getDownloadURL(i);
        }
      }
    }).catch(error => console.log(error));
  }

  deleteImages(route: string) {
    const imagesRef = ref(this.storage, route);
    deleteObject(imagesRef);
  }

  clearUrl() {
    this.url = '';
  }
  
}

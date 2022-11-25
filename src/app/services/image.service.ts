import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  url?: string;

  constructor(private storage: Storage) { }

  public uploadImage($event: any, name: string) {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, 'image/' + name);
    uploadBytes(imgRef, file).then(response => {
      this.getImages();
    }).catch(error => console.log(error));
  }

  getImages() {
    const imagesRef = ref(this.storage, 'image');
    list(imagesRef).then(async response => {
      for(let i of response.items) {
        this.url = await getDownloadURL(i);
      }
    }).catch(error => console.log(error));
  }
  
}

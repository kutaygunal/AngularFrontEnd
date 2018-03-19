import { Component,OnChanges, Input,ElementRef, ViewChild} from '@angular/core';
import { ImageService  } from '../image/shared/image.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnChanges {

  @Input() filterBy?: string = 'all'
  visibleImages : any[] = [];
  images = '';
  selectedFile : File = null;

  acceptedMimeTypes = [
    'image/gif',
    'image/jpeg',
    'image/png'
  ];

  @ViewChild('fileInput') fileInput: ElementRef;
  fileDataUri = '';
  errorMsg = '';

  constructor(private imageService: ImageService,private http: HttpClient){
    this.visibleImages = this.imageService.getImages();
  }
  ngOnChanges(){
    this.visibleImages = this.imageService.getImages();
  }


  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload(event){
    const fd = new FormData();
    fd.append('image',this.selectedFile,"NAber");
    this.http.post('/api/userAccounts',fd)
    .subscribe(res => {
    });
  }

  previewFile() {
    const file = this.fileInput.nativeElement.files[0];
    if (file && this.validateFile(file)) {
      const reader = new FileReader();
      reader.readAsDataURL(this.fileInput.nativeElement.files[0]);
      reader.onload = () => {
        this.fileDataUri = reader.result;
      }
    } else {
      this.errorMsg = 'File must be jpg, png, or gif and cannot be exceed 500 KB in size'
    }
  }

  uploadFile(event: Event) {
    event.preventDefault();
    // get only the base64 file and post it
    if (this.fileDataUri.length > 0) {
    const base64File = this.fileDataUri.split(',')[1];
    const data = {'image': base64File};
    this.http.post(`${environment.apiUrl}/upload-photo`, data)
    .subscribe(
      res => {
        // handle success
        // reset file input
        this.fileInput.nativeElement.value = '';
      },
      err => {
        this.errorMsg = 'Could not upload image.';
      }
    );

  }

}

validateFile(file) {
  return this.acceptedMimeTypes.includes(file.type) && file.size < 500000;
}
}

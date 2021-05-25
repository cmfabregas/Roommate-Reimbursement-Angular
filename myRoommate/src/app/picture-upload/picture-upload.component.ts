import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { ImageSnippet } from './picture-upload';
import { PictureUploadService } from './picture-upload.service'

@Component({
  selector: 'app-picture-upload',
  templateUrl: './picture-upload.component.html',
  styleUrls: ['./picture-upload.component.css']
})
export class PictureUploadComponent implements OnInit {

  constructor(private imageService: PictureUploadService, private http: HttpClient) {
  }

  selectedFile!: FileList;
  
  ngOnInit(): void {
  }

  selectFile(event: any) {
    this.selectedFile = event.target.files;
  }
  
  processImage() {
    console.log('started');
    console.log(this.selectedFile);
    console.log(this.selectedFile.item(0));
    const file = this.selectedFile.item(0);
    this.imageService.uploadImage(file,this.http);
  }

}

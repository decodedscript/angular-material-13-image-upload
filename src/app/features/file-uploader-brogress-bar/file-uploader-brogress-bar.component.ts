import { HttpEventType } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { IFile } from '../models/Ifile';
import { FileUploadService } from '../services/file-upload-progress-bar.service';


@Component({
  selector: 'app-file-uploader-brogress-bar',
  templateUrl: './file-uploader-brogress-bar.component.html'
})
export class FileUploaderBrogressBarComponent implements OnInit {

  hideprogressBar: boolean = false;
  selectedFiles: IFile[] = [];
  formData: FormData = new FormData();
  percentDone: number = 0;

  @ViewChild("imageContainer") imageContainer: ElementRef;

  constructor(
    private fileUploadService: FileUploadService,
    private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.hideprogressBar = true;
  }
  get fileName() {
    let name: string = "";
    Array.from(this.selectedFiles).forEach((file: IFile) => {
      name = name.concat(file.name, " ");
    })
    return name;
  }
  onSelectFile(event: any) {

    Array.from(event.target.files).forEach((file: any) => {
      //this.formData.append(file.name, file);
      //get Base64 string    
      this.getBase64(file, (res: any) => {
        this.formData.append(file.name, res);
        // display image preview
        this.selectedFiles.push({ name: file.name, value: res });
      })
    });
  }

  getBase64(file: any, callBack: any) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      callBack(reader.result);
    };
    reader.onerror = (error) => {
      callBack(null);
      this.snackbar.open('Error', "error", { duration: 5000 });

    };
  }
  displayPreview() {

    this.formData.forEach((file) => {
      file
    })

  }

  onUploadClick() {
    this.hideprogressBar = false;
    this.fileUploadService.uploadFile(this.formData).subscribe((res: any) => {
      if (res.type === HttpEventType.Response) {
        this.snackbar.open('Upload complete', "Okay", { duration: 5000 });
      }
      if (res.type === HttpEventType.UploadProgress) {
        this.percentDone = Math.round(100 * res.loaded / res.total);
      }
    })
  }
}

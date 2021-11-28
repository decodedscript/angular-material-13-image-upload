import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IFile } from '../models/Ifile';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private _http: HttpClient) { }

  uploadFile(files: FormData) {
    return this._http.post(`${environment.API}/upload-avatar`, files, {
      reportProgress: true,
      observe: 'events'
    });
  }
}

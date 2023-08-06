import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  constructor(private http: HttpClient) {}

  getFiles() {
    return this.http.get(`api/data/videoslist`)
  }

  uploadFile(data:object) {
    return this.http.post("api/data/video/upload", data)
  }

  getFile(id:string) {
    return this.http.get(`api/data/video/stream/${id}`)
  }

  getFileViaSocket(id:string) {
    return this.http.get(`api/data/video/socket/stream/${id}`)
  }


}

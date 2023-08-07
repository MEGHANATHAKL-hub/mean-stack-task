import { Component, Inject, Optional,  } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-video-stream-http',
  templateUrl: './video-stream-http.component.html',
  styleUrls: ['./video-stream-http.component.scss']
})
export class VideoStreamHttpComponent {
  fileName:string;

  constructor( @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
   private appService:AppService) {
    this.fileName = `api/data/video/http/stream/${data.fileName}`;
 }
}

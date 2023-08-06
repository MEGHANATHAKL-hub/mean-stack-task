import { Component, Inject, Optional, ViewChild, ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppService } from 'src/app/shared/services/app.service';
import { SocketService } from 'src/app/shared/services/socket.service';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-video-stream',
  templateUrl: './video-stream.component.html',
  styleUrls: ['./video-stream.component.scss']
})
export class VideoStreamComponent  {
  socket:any;
  fileName;

  static readonly SOCKET_EVENT = {
    VIDEO: "video-stream"
  }
  @ViewChild('videoPlayer') videoElementRef!: ElementRef<HTMLVideoElement>;
  public showVideoPlayer = false;
  private videoElement: HTMLVideoElement;
  progress: number | undefined;

  constructor( @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
   private socketService: SocketService, 
   private appService:AppService) {
    //this.fileName = `api/data/video/stream/${data.fileName}`
    this.fileName = `api/data/video/socket/stream/${data.fileName}`
    this.socket = io(window.origin);
 }

 ngAfterViewInit(): void {
  this.socket.on('connect', () => {
    console.log('Connected to server');
  });

  this.startStreaming();
  this.socket.on('video-stream', (data: ArrayBuffer) => {
    const videoBlob = new Blob([data], { type: 'video/mp4' });
    const videoStream = URL.createObjectURL(videoBlob);
    this.videoElementRef.nativeElement.src = videoStream;
  });

  this.socket.on('video-end', () => {
    console.log('Video stream ended');
    this.progress = undefined;
  });

  this.socket.on('disconnect', () => {
    console.log('Disconnected from server');
  });
}

startStreaming() {
  this.socket.emit('start-stream', this.data.fileName);
}


ngOnDestroy() {
  // Clean up the socket connection when the component is destroyed
  this.socket.disconnect();
}

}

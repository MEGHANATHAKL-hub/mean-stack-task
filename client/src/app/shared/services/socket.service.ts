import { Injectable } from '@angular/core';
import { io } from "socket.io-client";

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  //Initialize Socket
  socket = io(window.origin, {
    'reconnectionDelay': 1000,
    'reconnectionAttempts': 15,
    'transports': ['websocket', 'polling']
  });

  constructor() {
    console.log(window.origin)
    this.socket.on("disconnect", (data) => {
      console.log(data);
    })
    this.socket.on("connect", function () {
      console.log("connected");
    })
    this.socket.on("connect_error", (data) => {
      console.log(data);
    })
  }

  private socketInstance(room:any) {
    return io(room, { transports: ['websocket', 'polling'] });
  }

  initializeVideoRoom() {
    return this.socketInstance("/video");
  }

  initializeProductRoom() {
    return this.socketInstance("/product");
  }

  initializeMagicMirrorRoom() {
    return this.socketInstance("/magic-mirror");
  }

  initializCartRoom() {
    return this.socketInstance("/cart");
  }
}
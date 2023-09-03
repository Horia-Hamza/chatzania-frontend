import { Injectable } from '@angular/core';
import { Socket,io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketIoService {
  private socket: Socket;
  constructor() {
    this.socket = io('http://localhost:3000');
      // Listen for the 'welcome' event from the server
  this.socket.on('welcome', (message:any) => {
      console.log('Server message:', message);
    });
  }
  // getSocket(): Socket {
  //   return this.socket;
  // }
}


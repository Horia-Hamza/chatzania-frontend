import { Component, OnInit } from '@angular/core';
import { SocketIoService } from '../socket-io.service';
import { Socket } from 'socket.io-client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  private socket!: Socket;
  constructor(private _SocketIoService:SocketIoService) { }

  ngOnInit(): void {
    // this.socket = this._SocketIoService.getSocket();
    // this.socket.on('welcome', (data: any) => {
    //   console.log('Received message:', data);
    // });
  }
  }



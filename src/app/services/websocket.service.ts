import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  socket: any;
  readonly url: string = 'ws://localhost:8000';
  constructor() {
    this.socket = io(this.url, {
      auth: {
        token: '123',
      },
      query: {
        username: 'JohnDoe',
      },
    });
  }

  public listen(eventName: string) {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data) => {
        subscriber.next(data);
      });
    });
  }

  public sendMessage(message: string) {
    this.socket.emit('send-message', message);
  }
}

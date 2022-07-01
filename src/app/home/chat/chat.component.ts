import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WebsocketService } from 'src/app/services/websocket.service';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  socket: any;
  readonly url: string = 'ws://localhost:8000';
  chatForm: FormGroup;
  @ViewChild('msgLists', { static: false }) messageBox: ElementRef;

  constructor(
    private fb: FormBuilder,
    private WebsocketService: WebsocketService
  ) {
    this.socket = io(this.url, {
      auth: {
        token: '123',
      },
      query: {
        username: 'JohnDoe',
      },
    });
  }

  ngOnInit(): void {
    this.init();
    this.setupSocket();
  }

  private init() {
    this.chatForm = this.fb.group({
      message: [null, Validators.required],
    });
  }
  //initialize socket
  setupSocket() {
    this.socket.on('user-connected', (data) => {
      console.log(`Data got from server: ${data}`);
    });
    //user connected event
    // this.WebsocketService.socket.on('connect', () => {
    //   console.log(
    //     'User connected from client' + this.WebsocketService.socket.id
    //   );
    // });
    this.socket.on('message-broadcast', (data) => {
      let li = document.createElement('li');
      li.classList.add('msg-item');
      li.innerHTML = `<a href="#">${data.message}</a>`;
      this.messageBox.nativeElement.appendChild(li);
    });
  }
  onSubmitPrivateChat() {
    console.log(this.chatForm.value);
    const msg = this.chatForm.value;
    //reset form
    this.chatForm.reset();
    //emit the message to server
    this.sendMessage(msg);
  }

  sendMessage(data) {
    this.socket.emit('send-message', data);
    let li = document.createElement('li');
    li.classList.add('msg-item');
    li.innerHTML = `<a href="#">${data.message}</a>`;
    this.messageBox.nativeElement.appendChild(li);
    //
  }
}

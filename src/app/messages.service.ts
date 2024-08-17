import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  messages: string[] = ['a'];

  add(message:string) {
    this.messages.push(message);
  }
}

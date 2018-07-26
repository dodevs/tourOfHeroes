import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // precisa ser publico para ser acessível no template [bind]
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../services/contacts/models';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.sass']
})
export class ContactCardComponent implements OnInit {
  @Input() contact!: Contact;

  constructor() { }

  ngOnInit(): void {
  }

}

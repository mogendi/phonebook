import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Contact } from '../services/contacts/models';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.sass']
})
export class ContactDetailsComponent implements OnInit {

  @Input() contactInFocus!: Contact | null; 
  @Output() changeContactInFocus = new EventEmitter<Contact>();

  constructor() { }

  ngOnInit(): void {}

  changeContact(contact: Contact) {
    this.changeContactInFocus.emit(contact)
  }
}

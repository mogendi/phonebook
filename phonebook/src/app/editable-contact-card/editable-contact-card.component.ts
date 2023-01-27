import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../services/contacts/models';
import { ContactsService } from '../services/contacts/contacts.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editable-contact-card',
  templateUrl: './editable-contact-card.component.html',
  styleUrls: ['./editable-contact-card.component.sass']
})
export class EditableContactCardComponent implements OnInit {

  @Input() contact!: Contact;
  updatedContactForm!: UntypedFormGroup;
  @Output() changeContactInFocus = new EventEmitter<Contact>();
  

  constructor(
    private contactService: ContactsService,
    private snackBar: MatSnackBar,
    private formBuilder: UntypedFormBuilder,
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  get f() { return this.updatedContactForm.controls; }

  updateContact() {
    let contact = this.contructContact();
    this.contactService.updateContacts(this.contact.id, contact)
    .subscribe(data => {
      this.contact = data;
      this.snackBar.open(
        "Contact updated successfully", "Dismiss"
      );
      this.changeContactInFocus.emit(data);
    })
  }

  initializeForm() {
    this.updatedContactForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
    });

    let contact = this.contact;
    this.updatedContactForm.controls['first_name'].setValue(contact.first_name);
    this.updatedContactForm.controls['last_name'].setValue(contact.last_name);
    this.updatedContactForm.controls['email'].setValue(contact.email);
    this.updatedContactForm.controls['phone'].setValue(contact.phone);
    this.updatedContactForm.controls['address'].setValue(contact.address);
  }

  contructContact(): Contact {
    return {
      id: this.contact.id,
      first_name: this.f['first_name'].value,
      last_name: this.f['last_name'].value,
      email: this.f['email'].value,
      phone: this.f['phone'].value,
      address: this.f['address'].value,
      image_url: this.contact.image_url,
      selected: this.contact.selected,
    }
  }

}

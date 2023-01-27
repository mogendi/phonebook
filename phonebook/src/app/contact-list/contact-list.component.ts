import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { ContactsService } from '../services/contacts/contacts.service';
import { Contact } from '../services/contacts/models';
import { Observable, debounceTime, distinctUntilChanged, fromEvent } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.sass']
})
export class ContactListComponent implements AfterViewInit {

  @Output() changeContactInFocus = new EventEmitter<Contact>();
  @Input() stateChangeTrigger!: Observable<boolean>;

  loading = true;
  contacts: Contact[] = [];
  selected = false;

  constructor(
    private contactsService: ContactsService
  ) { }

  ngAfterViewInit(): void {
    this.fetchContacts({});
    this.stateChangeTrigger.subscribe(
      changed => {
        if (changed) {
          this.fetchContacts({})
        }
      }
    )
  }

  fetchContacts(params: {}) {
    this.contactsService.getContacts(params)
    .subscribe(contacts => {
      this.loading = false;
      this.contacts = contacts;
    })
  }

  onKeyStroke() {
    fromEvent(document.getElementById("search")!, 'keyup')
      .pipe(
        // @ts-ignore
        filter(Boolean),
        debounceTime(500),
        distinctUntilChanged<KeyboardEvent>(),
        tap((event: KeyboardEvent) => {
          // @ts-ignore
          this.fetchContacts({search: event.target!.value});
        })
      ).subscribe()
  }

  setContacInFocus(contact: Contact) {
    this.changeContactInFocus.emit(contact)
  }

  stateChangedForContacts() {
    this.fetchContacts({});
  }

  updateSelected() {
    this.selected = this.contacts.some((current) => current.selected);
  }

  deleteSelected() {
    let selected = this.contacts.filter((current) => current.selected);
    let processed = 0;
    for (let contact of selected) {
      this.contactsService.deleteService(contact.id).subscribe(
        _ => {
          processed++;
          if (processed == selected.length) {
            this.fetchContacts({});
            this.selected = false;
          }
        }
      );
    }
  }

}

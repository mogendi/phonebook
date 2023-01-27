import { Component, OnInit } from '@angular/core';
import { Contact } from '../services/contacts/models';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.sass']
})
export class MainGridComponent implements OnInit {

  contactInFocus: Contact | null = null;

  changeObserver!: Observer<boolean>;
  stateChangeTrigger: Observable<boolean> = new Observable(observer => {
    this.changeObserver = observer
  });

  constructor() { }

  ngOnInit(): void {}

  changeInFocus(contact: Contact) {
    this.contactInFocus = contact;
    this.changeObserver.next(true);
  }

}

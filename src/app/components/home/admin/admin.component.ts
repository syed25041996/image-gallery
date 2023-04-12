import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  contactList: any = [];
  loggedInUser = localStorage.getItem('username');
  constructor(private router: Router, private contactService: ContactService) {}

  ngOnInit() {
    this.onGetContacts();
  }

  onAddContact() {
    this.router.navigate(['/home/add-contact']);
  }

  onGetContacts() {
    this.contactService.getAllContacts().then((res: any) => {
      this.contactList = res;
      localStorage.setItem('contactList', JSON.stringify(this.contactList));
    });
  }

  onDeleteContact(data: any) {
    this.contactService.deleteContact(data);
    this.onGetContacts();
    console.log(data);
  }
}

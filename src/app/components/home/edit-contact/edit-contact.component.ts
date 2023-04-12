import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IContact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss'],
})
export class EditContactComponent {
  contactForm!: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactService: ContactService,
    private fb: FormBuilder
  ) {}

  contact: any;
  id!: IContact;
  contactList: any = [];

  ngOnInit() {
    this.route.paramMap.subscribe((params: any) => {
      this.id = params.get('id');
    });
    this.contactList = JSON.parse(localStorage.getItem('contactList')!);
    this.contactList.forEach((contact: any) => {
      if (contact.id == this.id) {
        this.contact = contact;
        console.log(this.contact);
      }
    });

    this.contactForm = this.fb.group({
      name: [this.contact.name, [Validators.required]],
      email: [this.contact.email, [Validators.required]],
      photo: [this.contact.photo, [Validators.required]],
      mobile: [this.contact.mobile, [Validators.required]],
      company: [this.contact.company, [Validators.required]],
      title: [this.contact.title, [Validators.required]],
      group: [this.contact.group, [Validators.required]],
    });
  }

  onEditContact() {
    console.log(this.contactForm.value);
    const { name, email, photo, mobile, company, title, groupId } =
      this.contactForm.value;
    this.contactService.editContact(
      this.id,
      name,
      email,
      photo,
      mobile,
      company,
      title,
      groupId
    );
    this.router.navigate(['/home/admin'])
  }
}

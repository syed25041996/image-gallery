import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IContact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
})
export class AddContactComponent {
  contactForm!: FormGroup;

  constructor(
    private router: Router,
    private contactService: ContactService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      photo: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      company: ['', [Validators.required]],
      title: ['', [Validators.required]],
      group: ['', [Validators.required]],
    });
  }

  onAddContact() {
    console.log(this.contactForm.value);
    const { name, email, photo, mobile, company, title, groupId } =
      this.contactForm.value;
    this.contactService.postContact(
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

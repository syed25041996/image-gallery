import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.scss'],
})
export class ViewContactComponent {
  contact : any
  id = '';
  contactList: any = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: any) => {
      this.id = params.get('id');
    });
    this.contactList = JSON.parse(localStorage.getItem('contactList')!);
    this.contactList.forEach((contact : any) => {
      if(contact.id == this.id){
        this.contact = contact
      }
    });
  }
}

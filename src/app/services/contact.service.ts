import { Injectable } from '@angular/core';
import { supabase } from 'src/environments/environment';
import { IContact } from '../models/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor() {}

  async postContact(
    name: IContact,
    email: IContact,
    photo: IContact,
    mobile: IContact,
    company: IContact,
    title: IContact,
    groupId: IContact
  ) {
    const { data: response, error } = await supabase.from('contacts').insert([
      {
        name,
        email,
        photo,
        mobile,
        company,
        title,
        groupId,
      },
    ]);
    if (error) {
      console.error('Error:', error);
      return null;
    }
    console.log(response);
    return response;
  }

  async getAllContacts() {
    let { data: contacts, error } = await supabase.from('contacts').select('*');

    if (error) {
      console.log('Error : ', error);
    }

    return contacts;
  }

  async editContact(
    id: IContact,
    name: IContact,
    email: IContact,
    photo: IContact,
    mobile: IContact,
    company: IContact,
    title: IContact,
    groupId: IContact
  ) {
    const { data, error } = await supabase
      .from('contacts')
      .update({
        name,
        email,
        photo,
        mobile,
        company,
        title,
        groupId,
      })
      .eq('id', id);

    if (error) {
      console.error('Error updating record:', error);
    }

    return data;
  }

  async deleteContact(id: IContact) {
    const { data, error } = await supabase
      .from('contacts')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error updating record:', error);
    }

    return data;
  }
}

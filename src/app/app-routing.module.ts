import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/home/admin/admin.component';
import { AddContactComponent } from './components/home/add-contact/add-contact.component';
import { EditContactComponent } from './components/home/edit-contact/edit-contact.component';
import { ViewContactComponent } from './components/home/view-contact/view-contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'admin', component: AdminComponent },
      { path: 'add-contact', component: AddContactComponent },
      { path: 'edit-contact/:id', component: EditContactComponent },
      { path: 'view-contact/:id', component: ViewContactComponent },
      { path: '', redirectTo: 'admin', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

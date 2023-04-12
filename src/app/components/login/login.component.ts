import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { supabase } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  async saveLoginDetails(datas: any) {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: this.username?.value,
      password: this.password?.value,
    });

    if (data.user === null) {
      console.log(error);
      this.toastr.error('','Invalid credentials')
    } else {
      console.log(data);
      const username = this.username?.value.split('@')[0]
      localStorage.setItem('username', username);
      this.toastr.success('', 'Successfully logged in');
      this.router.navigate(['/home/admin']);
    }
  }
}

import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'rps-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = {
    type: 'local',
    username: '',
    password: '',
    rememberMe: false,
  };

  constructor(public authService: AuthService) {
  }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const email = this.form.username;
    const password = this.form.password;
    this.authService.login({email, password});
  }
}

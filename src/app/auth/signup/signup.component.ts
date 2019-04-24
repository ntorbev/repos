import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'rps-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form = {
    username: '',
    password: ''
  };

  constructor(public authService: AuthService) {
  }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const email = this.form.username;
    const password = this.form.password;
    this.authService.createUser({email, password});
  }

}

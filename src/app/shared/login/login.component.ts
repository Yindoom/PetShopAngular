import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationServiceService} from '../services/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authService: AuthenticationServiceService) { }
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
errormessage = '';

  ngOnInit() {
    this.authService.logout();
  }
  login() {
    const input = this.loginForm.value;
    this.authService.login(input).subscribe(success => {this.router.navigateByUrl('/pets'); },
      error => { this.errormessage = error.message; } );
  }

}

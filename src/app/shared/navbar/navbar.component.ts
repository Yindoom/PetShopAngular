import { Component, OnInit } from '@angular/core';
import {AuthenticationServiceService} from '../services/authentication-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthenticationServiceService) { }

  ngOnInit() {
  }
logout() {
    this.auth.logout();
  }
}

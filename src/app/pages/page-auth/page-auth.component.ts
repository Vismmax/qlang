import { Component, OnInit } from '@angular/core';

export interface AuthData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-page-auth',
  templateUrl: './page-auth.component.html',
  styleUrls: ['./page-auth.component.scss'],
})
export class PageAuthComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  handleLogin(data: AuthData) {}

  handleRegistration(data: AuthData) {}
}

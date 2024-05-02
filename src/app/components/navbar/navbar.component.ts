import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  Logout = 'Logout';
  nameUser: any = '';
  role = '';

  constructor(

  ) {}

  async ngOnInit() {
    this.nameUser = localStorage.getItem('user');
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authservice: authService) { }

  ngOnInit() {
  }
  onLoadServers(id : number) {
    this.router.navigate(['/servers', id, 'Edit'], { queryParams: { 'allowedit':'1'} , fragment:'loading' });
  }
  onLogin() {
    this.authservice.loggedIn = true;
  }
  onLogout() {
    this.authservice.loggedIn = false;

  }
}

import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  constructor(private router:Router,private ss:SharedService){

  }
  email = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  login() {
    if (this.email.value === 'admin@gmail.com' && this.password.value === 'admin') {
      this.ss.sharedSubject.next({state:'admin'})
      this.router.navigate(['/admin-dashboard']);
    }
  }
}

import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BackService {

  constructor(private router: Router) { }

  loggedIn:boolean=false;

  login()
  {
    this.loggedIn = true;
    this.router.navigate(['/main']);
  }
}

import { Component, OnInit } from '@angular/core';
import {BackService} from '../back.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private backService:BackService) { }
  isLoginMode:boolean= true;
  isLoading:boolean=true;
  error: string = null;


  ngOnInit() {
  }


  onSubmit(form)
  {
    if(!form.valid)
    {
      return;
    }
    console.log(form.value);
    this.backService.login();
    form.reset();
  }
}

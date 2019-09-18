import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BackService {

  constructor(private router: Router) { }

  loggedIn:boolean=false;

  statusList=[
    {
      type:'image',
      id:1,
      heading:'Now you know!',
      imageLink:"assets/image1.png"
    },
    {
      type:'small',
      id:2,
      heading:'The government offered to buy my guns from me',
      story:"But after a thorough background check of the buyer, I am not comfortable with selling weapons to organized crime."
    },
    {
      type:'image',
      id:3,
      heading:'Nothing but facts',
      imageLink:"assets/image2.jpg"
    },
    {
      type:'small',
      id:4,
      heading:'What do you call a boat full of polite football players?',
      story:"A good sportsman ship , Haha"
    },
    {
      type:'small',
      id:5,
      heading:'What did Raichu say when it saw Pikachu ?',
      story:"Raichu"
    },
    {
      type:'image',
      id:6,
      heading:'🔥 Baby cheetah with a mohawk',
      imageLink:"assets/image3.jpg"
    }
  ]

  login()
  {
    this.loggedIn = true;
    this.router.navigate(['/main']);
  }
}

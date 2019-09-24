  
import { Injectable } from '@angular/core';
import {CanActivate,ActivatedRouteSnapshot,
      RouterStateSnapshot,
      Router} from '@angular/router';
import {BackService} from './back.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authService:BackService, private router: Router) { }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////ROUTE ACTIVATER FOR LOGIN PURPOSE/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
canActivate(route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
   return this.authService.isAuthenticated().then((authenticated:boolean)=>{
      if(authenticated)
      { 
        return true;
      }
      else
      {
        this.router.navigate(['/']);
      }
    });
  }




}

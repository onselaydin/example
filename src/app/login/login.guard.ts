import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AccountService } from '../services/account.service';

@Injectable()
export class LoginGuard implements CanActivate { //Aktive edebilirmi
    constructor(private accountService: AccountService,
        private router: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let logged = this.accountService.isLoggedIn(); //account servisinde yazdığımız isLoogedIn metodunun döndürdüğü değeri aldık.
        if(logged){
            return true;
        }
        this.router.navigate(["login"]);
        return false;
    }
}
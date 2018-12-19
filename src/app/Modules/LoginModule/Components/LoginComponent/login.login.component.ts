import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { UserService } from "src/app/Modules/SharedModule/Services/UserService/shared.user.service";
import { NgForm, Form } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-login',
    templateUrl: 'login.login.component.html',
    styleUrls: ['login.login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
    isUserLoggedIn: boolean;
    subscription: Subscription;
    @ViewChild('loginForm') loginForm:NgForm;

    constructor(private userService:UserService, private router: Router) {}

    ngOnInit() {
        
    }

    onLogin() {
        console.log(this.loginForm)
        if(this.loginForm.valid) {
            this.userService.setToken('djsahklsadjhsaldkj');
            this.router.navigate(['/home']);
        }
    }

    ngOnDestroy() {

    }
}
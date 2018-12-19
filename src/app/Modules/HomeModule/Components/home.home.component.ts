import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { HomeHttpService } from "../Services/home.http.service";
import { MOCK_USER_DATA } from "../Services/Models/home.mock.models";
import { UserService } from "../../SharedModule/Services/UserService/shared.user.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: 'home.home.component.html',
    styleUrls: ['home.home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
    userData: MOCK_USER_DATA[]
    subscription: Subscription

    constructor(private homeHttpService: HomeHttpService, 
                private userservice: UserService,
                private router: Router) {}

    ngOnInit() {
        this.homeHttpService.getUserData().then((data: MOCK_USER_DATA[]) => {
           this.userData = data
        });

        this.subscription = this.homeHttpService.getUserDataObserable().subscribe((data: MOCK_USER_DATA[]) => { 
            console.log(data)
        })
    }

    onLogout() {
        this.userservice.removeToken();
        this.router.navigate(['/login']);
    }

    ngOnDestroy() {
        if(this.subscription) this.subscription.unsubscribe()
    }
}
import { TestBed, async, inject } from "@angular/core/testing";
import { AuthGuardService } from "./shared.auth.gaurd";
import { RouterTestingModule } from "@angular/router/testing"
import { UserService } from "../Services/UserService/shared.user.service";
import { Router } from "@angular/router";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";
describe('AuthGuardService Fail', () => {
    let userService: UserService
    let authGuardService: AuthGuardService
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UserService, AuthGuardService],
            imports: [RouterTestingModule]
        });
    });

    it('should not navigate if user is invalid',
        async(inject([AuthGuardService, UserService, Router], (auth, userService, router) => {
            userService.removeToken()
            spyOn(router, 'navigate')
            let res = auth.canActivate()
            expect(router.navigate).toHaveBeenCalled();
        })
    ));

    describe('AuthGuardService Success', () => {
        let userService: UserService
        let authGuardService: AuthGuardService
        
        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [UserService, AuthGuardService],
                imports: [RouterTestingModule]
            });
        });
    
        it('should navigate if user is valid',
            async(inject([AuthGuardService, UserService, Router], (auth, userService, router) => {
                userService.setToken("adsdsasdagkjsda");
                let res = auth.canActivate()
                userService.removeToken()
                expect(res).toBeTruthy();
            })
        ));
    });
});
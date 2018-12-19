import { TestBed, ComponentFixture, inject, async } from "@angular/core/testing";
import { LoginComponent } from "./login.login.component";
import { FormsModule } from "@angular/forms";
import { UserService } from "src/app/Modules/SharedModule/Services/UserService/shared.user.service";
import { RouterTestingModule } from "@angular/router/testing";

describe('LoginComponent', () => {
    let fixture: ComponentFixture<LoginComponent>
    let component:LoginComponent
    let userService: UserService

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [FormsModule, RouterTestingModule],
            providers: [UserService]
        }).compileComponents()
    }));

    beforeEach(async(() => {
        fixture = TestBed.createComponent(LoginComponent)
        component = fixture.debugElement.componentInstance;
    }))

    it('should have login form as invalid by default', async(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            expect(component.loginForm.valid).toBeFalsy()
            fixture.detectChanges();
            let button: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('.btn-success')
            expect(button.disabled).toBeTruthy()
        })
    }));

    it('should have login form as valid after data entry', async(() => {
        component.loginForm.control.patchValue({'lusername': 'test@test.com', 'lpassword': 'adskgldsajsd'})
        fixture.whenStable().then(() => {
            expect(component.loginForm.valid).toBeTruthy()
            fixture.detectChanges();
            let button: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('.btn-success')
            expect(button.disabled).toBeFalsy()
        })
    }));
});
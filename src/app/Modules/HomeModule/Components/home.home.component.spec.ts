import { TestBed, ComponentFixture, async, inject, fakeAsync, tick } from "@angular/core/testing";
import { HomeComponent } from "./home.home.component";
import { UserService } from "../../SharedModule/Services/UserService/shared.user.service";
import { HomeHttpService } from "../Services/home.http.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";

describe('HomeComponent', () => {
    let component: HomeComponent
    let fixture: ComponentFixture<HomeComponent>
    let HomeHttpServiceMock: Partial<HomeHttpService>

    let homeHttpService: HomeHttpService
    let userService: UserService

    beforeEach(async(() => {
        HomeHttpServiceMock = new HomeHttpService()
        TestBed.configureTestingModule({
            declarations: [HomeComponent],
            imports: [CommonModule, FormsModule, RouterTestingModule],
            providers: [
                        UserService, 
                        { provide: HomeHttpService, useValue: HomeHttpServiceMock }
                       ]
        }).compileComponents();
    }));

    beforeEach(async(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.debugElement.componentInstance;
    }));

    beforeEach(inject([UserService, HomeHttpService], (UserService, HomeHttpService) => {
        userService = UserService
        homeHttpService = HomeHttpService
    }));

    it('should create the component', async(() => {
        expect(component).toBeDefined()
    }));

    it('should load userService', async(() => {
        expect(userService).toBeDefined()
        expect(homeHttpService).toBeDefined()
    }));

    it('should load data from getUserData on ngOnInit', fakeAsync(() => {
        let data = [
            {
                userid: 1,
                username: 'test username 1'
            },
            {
                userid: 2,
                username: 'test username 2'
            },
            {
                userid: 3,
                username: 'test username 3'
            }
        ];
        let myPromise = new Promise((resolve, reject) => {
            resolve(data)
        })
        spyOn(homeHttpService, 'getUserData').and.returnValue(myPromise);
        spyOn(component, 'ngOnInit').and.callThrough();
        fixture.detectChanges()
        tick()
        expect(component.userData).toBeTruthy()
    }));
});
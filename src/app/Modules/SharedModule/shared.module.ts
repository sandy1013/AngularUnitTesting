import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { LayoutComponent } from "./Components/Layout/shared.layout.component";
import { LoginComponent } from "../LoginModule/Components/LoginComponent/login.login.component";
import { HomeComponent } from "../HomeModule/Components/home.home.component";

import { UserService } from "./Services/UserService/shared.user.service";
import { AuthGuardService } from "./Guards/shared.auth.gaurd";

const routes: Route[] =  [
    { path: '', pathMatch:'full', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
    { path: '**', redirectTo: 'login' }
]

@NgModule({
    declarations: [LayoutComponent],
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [CommonModule, RouterModule, LayoutComponent],
    providers: [UserService, AuthGuardService]
})
export class  SharedModule {

}
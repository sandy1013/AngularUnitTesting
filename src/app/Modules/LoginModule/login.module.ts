import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from "./Components/LoginComponent/login.login.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [LoginComponent],
    imports: [CommonModule,FormsModule],
    exports: [FormsModule, LoginComponent]
})
export class LoginModule {

}
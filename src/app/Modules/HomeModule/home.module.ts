import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./Components/home.home.component";
import { HomeHttpService } from "./Services/home.http.service";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, FormsModule],
    exports: [HomeComponent],
    providers: [HomeHttpService]
})
export class HomeModule {

}
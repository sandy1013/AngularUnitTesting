import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-layout',
    templateUrl: 'shared.layout.component.html',
    styleUrls: ['shared.layout.component.scss']
})
export class LayoutComponent implements OnInit {
    title: string;

    ngOnInit() {
        this.title = "Application Title"
    }
}
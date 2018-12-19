import {TestBed, async, ComponentFixture } from '@angular/core/testing';
import { LayoutComponent } from './shared.layout.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('LayoutComponet', () => {
    let component: LayoutComponent
    let fixture: ComponentFixture<LayoutComponent>

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LayoutComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(LayoutComponent);
    })

    it('Should be created', () => {
        let component = fixture.componentInstance;
        expect(component).toBeTruthy()
    })

    it('Should not have a header', () => {
        let component = fixture.componentInstance;
        let element = fixture.nativeElement;
        let h1 = element.querySelector('.main-header > h1')
        expect(h1.textContent).not.toBe("Application Title")
    })

    it('Should have a header after init', () => {
        let component = fixture.componentInstance;
        let element = fixture.nativeElement;
        fixture.detectChanges()
        let h1 = element.querySelector('.main-header > h1')
        expect(h1.textContent).toBe("Application Title")
    })

    it('Should have a copyright', () => {
        let component = fixture.componentInstance;
        let element = fixture.nativeElement;
        fixture.detectChanges()
        let p = element.querySelector('.main-footer > p')
        expect(p.textContent).toContain("Copyright © 2019")
    })
});
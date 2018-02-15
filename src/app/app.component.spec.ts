import { TestBed, ComponentFixture, async, inject  } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { FlickrFeedModule } from './flickr-feed/flickr-feed.module';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let component: AppComponent,
        fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                BrowserModule,
                BrowserAnimationsModule,
                FormsModule,
                HttpModule,
                FlickrFeedModule,
                RouterModule.forRoot([])
            ],
            declarations: [
                AppComponent
            ],
            providers: [
                { provide: APP_BASE_HREF, useValue : '/' }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
        fixture.detectChanges();
    });

    it('should create the app', async(() => {
        expect(component).toBeTruthy();
    }));
});

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routes';

import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';
import { PrivateSharedModule } from './shared/shared.module';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdGridListModule } from '@angular2-material/grid-list';


@NgModule({
  imports: [BrowserModule, HttpModule, routing, RouterModule, HomeModule, AdminModule, MdGridListModule,  PrivateSharedModule.forRoot(), MdSidenavModule],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})

export class AppModule { }

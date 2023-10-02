import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RolunkComponent } from './part/rolunk/rolunk.component';
import { AllatainkComponent } from './part/allataink/allataink.component';
import { UjlakoComponent } from './part/ujlako/ujlako.component';
import { NavComponent } from './part/nav/nav.component';



@NgModule({
  declarations: [
    AppComponent,
    RolunkComponent,
    AllatainkComponent,
    UjlakoComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

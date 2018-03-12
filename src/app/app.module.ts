import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent }  from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule }   from "@angular/forms";
import { HttpModule }    from "@angular/http";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import {UserService} from "./user/user.service";
import {HttpClientModule} from "@angular/common/http";
import { UserInterceptor } from "./user/user.interceptor";


@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: UserInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

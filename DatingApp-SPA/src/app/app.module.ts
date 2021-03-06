import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ValueComponent } from './Value/Value.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from '@angular/forms';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { MemeberListComponent } from './memeber-list/memeber-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { appRoutes } from './routes';


@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      MemeberListComponent,
      ListsComponent,
      MessagesComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      ErrorInterceptorProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

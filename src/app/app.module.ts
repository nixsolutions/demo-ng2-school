import { BrowserModule }      from '@angular/platform-browser';
import { NgModule }           from '@angular/core';
import { FormsModule }        from '@angular/forms';
import { HttpModule }         from '@angular/http';
import { RouterModule }       from '@angular/router';

import { AppRouting }         from './app.routes';
import { AppComponent }       from './app.component';
import { AppService }         from './app.service';
import { HeaderComponent }    from './header/header.component';
import { SidebarComponent }   from './sidebar/sidebar.component';

import { BloggModule }        from './+blogg';
import { NoContentComponent } from './nocontent/nocontent.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    NoContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    BloggModule,
    AppRouting
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }

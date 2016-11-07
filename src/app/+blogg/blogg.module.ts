import { NgModule }              from '@angular/core';
import { BrowserModule }         from '@angular/platform-browser';

import { BloggCardModule }       from './blogg-card';
import { BloggComponent }        from './blogg.component';
import { BloggService }          from './blogg.service.ts';

@NgModule({
  imports: [ BrowserModule, BloggCardModule ],
  exports: [ BloggComponent ],
  declarations: [ BloggComponent ],
  providers: [ BloggService ]
})
export class BloggModule {}



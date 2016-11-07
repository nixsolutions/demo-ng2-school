import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';

import { BloggCardComponent }   from './blogg-card.component';
import { SharedModule }         from '../../shared';

@NgModule({
  imports: [ BrowserModule, SharedModule ],
  exports: [ BloggCardComponent ],
  declarations: [BloggCardComponent]
})
export class BloggCardModule { }



import { NgModule,
         ModuleWithProviders } from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ThumbnailComponent }   from '../thumbnail';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ ThumbnailComponent ],
  exports:      [ ThumbnailComponent ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}

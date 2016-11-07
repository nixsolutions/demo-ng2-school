import { Component, OnInit, AfterViewInit, ViewChild, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  template: `<img #image [src]="img" class="post-content-img" alt="" />`
})
export class ThumbnailComponent implements AfterViewInit  {
  @Input() img: any;

  @ViewChild('image') image: ElementRef;

  private $component: any;
  private $image: any;
  private isObjectFitSupported: boolean = false;

  constructor(private _el: ElementRef) { }

  ngAfterViewInit() {
    this.$component = this._el.nativeElement;
    this.$image = this.image.nativeElement;
    this.isObjectFitSupported = 'undefined' !== typeof this.$image.style.objectFit;

    if (!this.isObjectFitSupported) {
      this.$image.style.display = 'none';
      this.$component.style.backgroundImage = `url('${this.img}')`;
    }
  }
}
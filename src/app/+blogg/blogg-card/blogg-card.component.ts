import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blogg-card',
  templateUrl: './blogg-card.component.html'
})
export class BloggCardComponent implements OnInit {
  @Input() card: any;
  constructor() { }

  ngOnInit() {
    // if(!this.card.blogg_author.myPic) this.card.blogg_author.myPic = {'url' : 'app/assets/img/logo.png'};
  }

}
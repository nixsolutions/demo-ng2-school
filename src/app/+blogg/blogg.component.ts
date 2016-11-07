import { Component, OnInit } from '@angular/core';
import { BloggService }      from './blogg.service';
import { AppService }        from '../app.service';
@Component({
  selector: 'app-blogg',
  templateUrl: './blogg.component.html',
})
export class BloggComponent implements OnInit {

  constructor(private _bloggService: BloggService,
              private _appService: AppService) { }

  public sub: any;
  public cards: any;

  ngOnInit() {
    this.getCards();
  }

  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }

  getCards() {
    this.sub = this._bloggService.getCards()
                                 .subscribe(cards => {
                                   this.cards = cards.sort( (a, b) => {
                                      return Date.parse(a.createdAt) - Date.parse(b.createdAt);
                                    });;
                                 });
  }
  showSidebar() {
    this._appService.isSidebarOpen = true;
  }
}

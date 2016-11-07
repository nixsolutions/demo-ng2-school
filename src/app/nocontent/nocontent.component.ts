import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { AppService }        from '../app.service';
@Component({
  selector: 'app-nocontent',
  templateUrl: './nocontent.component.html'
})
export class NoContentComponent implements OnInit{
  public title: string;
  constructor(private _router: Router,
              private _appService: AppService){}

  ngOnInit(){
    this.title = this._router.url.slice(1);
  }
   showSidebar() {
    this._appService.isSidebarOpen = true;
  }
}

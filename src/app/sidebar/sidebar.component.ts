import { Component, OnInit } from '@angular/core';
import { AppService }        from '../app.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  private btns: any = [
    {
      route: '/dummie1',
      icon: 'icon--grey fa-calendar-o',
      label: 'Dummie 1'
    },
    {
      route: '/dummie2',
      icon: 'icon--yellow fa-newspaper-o',
      label: 'Dummie 2'
    },
    {
      route: '/dummie3',
      icon: 'icon--orange fa-folder-open',
      label: 'Dummie 3'
    },
    {
      route: '/dummie4',
      icon: 'icon--green fa-envelope',
      label: 'Dummie 4'
    },
    {
      route: '/dummie5',
      icon: 'icon--pink fa-book',
      label: 'Dummie 5'
    },
    {
      route: '/blogg',
      icon: 'icon--black fa-camera',
      label: 'Blogg'
    },
    {
      route: '/dummie6',
      icon: 'icon--dark-green fa-users',
      label: 'Dummie 6'
    },
    {
      route: '/dummie7',
      icon: 'icon--blue fa-users',
      label: 'Dummie 7'
    },
    {
      route: '/dummie8',
      icon: 'icon--gold fa-cogs',
      label: 'Dummie 8'
    },
  ]
  constructor(private _appService: AppService) { }

  ngOnInit() {
  }

  hideSidebar(){
    this._appService.isSidebarOpen = false;
  }
}

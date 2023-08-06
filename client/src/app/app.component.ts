import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AppService } from './shared/services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user: any;
  title = "Video-Store";
  activeRoute: string = "/videoslist";

  subMenus: any = {
    "/": "Video-Store",
    "/videoslist": "Video-Store",
    "/new-video": "New Video"
  }


  constructor(private appService: AppService, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log(event.url);
        this.activeRoute = event.url;
          this.title = this.subMenus[`${event.url}`];
      }
    });
  }

  ngOnInit(): void {
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  all_dataset: boolean = true;
  activeRoute: any;
  options: FormGroup;
  Url: any;
  mitData: any;

  constructor(fb: FormBuilder, private appService: AppService, private route: ActivatedRoute, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.url;
      }
    })
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });
  }

  ngOnInit(): void {

  }

  isActiveMenu(menuIndex: number): any {
    if (menuIndex == 0) {
      return this.activeRoute == "/videoslist";
    } 
  }

}


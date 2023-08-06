import { Component, Input, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AppService } from 'src/app/shared/services/app.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;

  constructor(private router: Router, private appService: AppService) {
  }

  ngOnInit(): void {

  }

}
